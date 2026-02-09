const express = require('express');
const multer = require('multer');
const router = express.Router();
const imagesController = require('../controllers/images.controller');

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG and PNG images are allowed'), false);
        }
    }
});

// POST /api/images/upload - Upload image
router.post('/upload', upload.single('image'), imagesController.uploadImage);

// GET /api/images - Get all images
router.get('/', imagesController.getAllImages);

// GET /api/images/:id - Stream image by ID
router.get('/:id', imagesController.getImageById);

// PUT /api/images/:id/caption - Update caption
router.put('/:id/caption', imagesController.updateCaption);

module.exports = router;
