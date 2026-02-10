const { GoogleGenAI } = require("@google/genai");

let ai = null;

/**
 * Get or initialize the Gemini AI client
 */
const getAI = () => {
    if (!ai) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY environment variable is not set');
        }
        console.log('Initializing Gemini with API key:', apiKey.substring(0, 10) + '...');
        ai = new GoogleGenAI({ apiKey });
    }
    return ai;
};

/**
 * Analyze an image using Google Gemini Vision API
 * @param {Buffer} imageBuffer - The image buffer
 * @param {string} mimeType - The MIME type of the image
 * @returns {Promise<{caption: string, tags: string[]}>}
 */
const analyzeImage = async (imageBuffer, mimeType) => {
    try {
        const client = getAI();

        const prompt = `Analyze this image and provide:
1. A short, descriptive caption (1-2 sentences maximum)
2. 5-8 descriptive tags/labels that describe the content, objects, colors, mood, and style of the image

Respond in the following JSON format only (no markdown, no code blocks):
{"caption": "your caption here", "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]}`;

        console.log('Sending request to Gemini API...');

        const response = await client.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                mimeType: mimeType,
                                data: imageBuffer.toString('base64')
                            }
                        }
                    ]
                }
            ]
        });

        const text = response.text;
        console.log('Gemini raw response:', text);

        // Parse the JSON response
        const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const parsed = JSON.parse(cleanedText);

        return {
            caption: parsed.caption || 'No caption generated',
            tags: Array.isArray(parsed.tags) ? parsed.tags : []
        };
    } catch (error) {
        console.error('Gemini API error:', error.message);
        if (error.status) {
            console.error('Status:', error.status, error.statusText);
        }
        console.error('Full error:', error);
        return {
            caption: 'AI-generated caption temporarily unavailable My be due to Increased Limit',
            tags: ['image', 'upload']
        };
    }
};

module.exports = { analyzeImage };
