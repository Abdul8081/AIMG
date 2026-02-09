const mongoose = require('mongoose');
const { Readable } = require('stream');
const Image = require('../models/Image');
const { getGridFS } = require('../config/gridfs');
const { analyzeImage } = require('../services/gemini.service');

/**
 * Upload image, store in GridFS, analyze with Gemini, save metadata
 */
const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const { buffer, originalname, mimetype } = req.file;
        const gridFSBucket = getGridFS();

        if (!gridFSBucket) {
            return res.status(500).json({ error: 'GridFS not initialized' });
        }

        // Create a readable stream from the buffer
        const readableStream = new Readable();
        readableStream.push(buffer);
        readableStream.push(null);

        // Upload to GridFS
        const uploadStream = gridFSBucket.openUploadStream(originalname, {
            contentType: mimetype
        });

        const gridfsId = uploadStream.id;

        await new Promise((resolve, reject) => {
            readableStream.pipe(uploadStream)
                .on('finish', resolve)
                .on('error', reject);
        });

        // Analyze image with Gemini
        const { caption, tags } = await analyzeImage(buffer, mimetype);

        // Save metadata to MongoDB
        const image = new Image({
            filename: originalname,
            gridfsId: gridfsId,
            contentType: mimetype,
            caption: caption,
            tags: tags
        });

        await image.save();

        res.status(201).json({
            id: image._id,
            filename: image.filename,
            caption: image.caption,
            tags: image.tags,
            createdAt: image.createdAt
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
};

/**
 * Get all images with metadata
 */
const getAllImages = async (req, res) => {
    try {
        const images = await Image.find()
            .sort({ createdAt: -1 })
            .select('_id filename caption tags createdAt');

        res.json(images.map(img => ({
            id: img._id,
            filename: img.filename,
            caption: img.caption,
            tags: img.tags,
            createdAt: img.createdAt
        })));
    } catch (error) {
        console.error('Get images error:', error);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
};

/**
 * Stream image from GridFS by ID
 */
const getImageById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid image ID' });
        }

        const image = await Image.findById(id);

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        const gridFSBucket = getGridFS();

        if (!gridFSBucket) {
            return res.status(500).json({ error: 'GridFS not initialized' });
        }

        res.set('Content-Type', image.contentType);

        const downloadStream = gridFSBucket.openDownloadStream(image.gridfsId);

        downloadStream.on('error', (error) => {
            console.error('Download stream error:', error);
            res.status(404).json({ error: 'Image file not found' });
        });

        downloadStream.pipe(res);
    } catch (error) {
        console.error('Get image error:', error);
        res.status(500).json({ error: 'Failed to fetch image' });
    }
};

/**
 * Update caption only (no AI re-call)
 */
const updateCaption = async (req, res) => {
    try {
        const { id } = req.params;
        const { caption } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid image ID' });
        }

        if (typeof caption !== 'string') {
            return res.status(400).json({ error: 'Caption must be a string' });
        }

        const image = await Image.findByIdAndUpdate(
            id,
            { caption: caption },
            { new: true }
        );

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        res.json({
            id: image._id,
            filename: image.filename,
            caption: image.caption,
            tags: image.tags,
            createdAt: image.createdAt
        });
    } catch (error) {
        console.error('Update caption error:', error);
        res.status(500).json({ error: 'Failed to update caption' });
    }
};

module.exports = {
    uploadImage,
    getAllImages,
    getImageById,
    updateCaption
};
