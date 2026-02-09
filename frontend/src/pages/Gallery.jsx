import React, { useState, useEffect, useCallback } from 'react';
import { Spin } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import ImageUpload from '../components/ImageUpload';
import ImageCard from '../components/ImageCard';
import EditCaptionModal from '../components/EditCaptionModal';
import { getAllImages } from '../services/api';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const fetchImages = useCallback(async () => {
        try {
            const data = await getAllImages();
            setImages(data);
        } catch (error) {
            console.error('Failed to fetch images:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    const handleUploadSuccess = (newImage) => {
        setImages((prev) => [newImage, ...prev]);
    };

    const handleEditCaption = (image) => {
        setSelectedImage(image);
        setEditModalVisible(true);
    };

    const handleCaptionSaved = (updatedImage) => {
        setImages((prev) =>
            prev.map((img) =>
                img.id === updatedImage.id ? { ...img, caption: updatedImage.caption } : img
            )
        );
    };

    return (
        <>
            <section className="upload-section">
                <ImageUpload onUploadSuccess={handleUploadSuccess} />
            </section>

            <section className="gallery-section">
                <h2 className="gallery-title">Your Images</h2>

                {loading ? (
                    <div className="loading-container">
                        <Spin size="large" />
                    </div>
                ) : images.length === 0 ? (
                    <div className="empty-gallery">
                        <PictureOutlined className="empty-gallery-icon" />
                        <p className="empty-gallery-text">
                            No images yet. Upload your first image to get started!
                        </p>
                    </div>
                ) : (
                    <div className="gallery-grid">
                        {images.map((image) => (
                            <ImageCard
                                key={image.id}
                                image={image}
                                onEditCaption={handleEditCaption}
                            />
                        ))}
                    </div>
                )}
            </section>

            <EditCaptionModal
                visible={editModalVisible}
                image={selectedImage}
                onClose={() => setEditModalVisible(false)}
                onSave={handleCaptionSaved}
            />
        </>
    );
};

export default Gallery;
