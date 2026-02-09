import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Upload an image file
 * @param {File} file - The image file to upload
 * @returns {Promise} - Upload response with image data
 */
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post('/images/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

/**
 * Get all images with metadata
 * @returns {Promise} - Array of images
 */
export const getAllImages = async () => {
    const response = await api.get('/images');
    return response.data;
};

/**
 * Get image URL by ID
 * @param {string} id - Image ID
 * @returns {string} - Image URL
 */
export const getImageUrl = (id) => {
    return `${API_BASE_URL}/images/${id}`;
};

/**
 * Update image caption
 * @param {string} id - Image ID
 * @param {string} caption - New caption
 * @returns {Promise} - Updated image data
 */
export const updateCaption = async (id, caption) => {
    const response = await api.put(`/images/${id}/caption`, { caption });
    return response.data;
};

export default api;
