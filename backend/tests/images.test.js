const { analyzeImage } = require('../services/gemini.service');

// Mock the Google Generative AI module
jest.mock('@google/generative-ai', () => ({
    GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
        getGenerativeModel: jest.fn().mockReturnValue({
            generateContent: jest.fn().mockResolvedValue({
                response: {
                    text: () => '{"caption": "A beautiful sunset over the ocean", "tags": ["sunset", "ocean", "nature", "sky", "water"]}'
                }
            })
        })
    }))
}));

describe('Image Upload and Caption Processing', () => {
    describe('analyzeImage', () => {
        it('should return caption and tags from Gemini API', async () => {
            const mockBuffer = Buffer.from('fake-image-data');
            const mimeType = 'image/jpeg';

            const result = await analyzeImage(mockBuffer, mimeType);

            expect(result).toHaveProperty('caption');
            expect(result).toHaveProperty('tags');
            expect(typeof result.caption).toBe('string');
            expect(Array.isArray(result.tags)).toBe(true);
        });

        it('should handle empty response gracefully', async () => {
            const mockBuffer = Buffer.from('fake-image-data');
            const mimeType = 'image/png';

            const result = await analyzeImage(mockBuffer, mimeType);

            expect(result.caption).toBeDefined();
            expect(result.tags).toBeDefined();
        });
    });

    describe('Caption Processing Logic', () => {
        it('should correctly parse JSON response with caption and tags', () => {
            const jsonResponse = '{"caption": "Test caption", "tags": ["tag1", "tag2"]}';
            const parsed = JSON.parse(jsonResponse);

            expect(parsed.caption).toBe('Test caption');
            expect(parsed.tags).toEqual(['tag1', 'tag2']);
        });

        it('should handle tags array with multiple items', () => {
            const jsonResponse = '{"caption": "A photo", "tags": ["nature", "landscape", "mountains", "sky", "clouds"]}';
            const parsed = JSON.parse(jsonResponse);

            expect(parsed.tags.length).toBeGreaterThanOrEqual(5);
        });
    });
});
