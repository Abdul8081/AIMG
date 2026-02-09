const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Analyze an image using Google Gemini Vision API
 * @param {Buffer} imageBuffer - The image buffer
 * @param {string} mimeType - The MIME type of the image
 * @returns {Promise<{caption: string, tags: string[]}>}
 */
const analyzeImage = async (imageBuffer, mimeType) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const imagePart = {
            inlineData: {
                data: imageBuffer.toString('base64'),
                mimeType: mimeType
            }
        };

        const prompt = `Analyze this image and provide:
1. A short, descriptive caption (1-2 sentences maximum)
2. 5-8 descriptive tags/labels that describe the content, objects, colors, mood, and style of the image

Respond in the following JSON format only (no markdown, no code blocks):
{"caption": "your caption here", "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]}`;

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();

        // Parse the JSON response
        const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const parsed = JSON.parse(cleanedText);

        return {
            caption: parsed.caption || 'No caption generated',
            tags: Array.isArray(parsed.tags) ? parsed.tags : []
        };
    } catch (error) {
        console.error('Gemini API error:', error);
        return {
            caption: 'Unable to generate caption',
            tags: ['unprocessed']
        };
    }
};

module.exports = { analyzeImage };
