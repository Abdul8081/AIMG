import React, { useState } from 'react';
import { Modal, Input, Button, message } from 'antd';
import { updateCaption } from '../services/api';

const { TextArea } = Input;

const EditCaptionModal = ({ visible, image, onClose, onSave }) => {
    const [caption, setCaption] = useState('');
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        if (image) {
            setCaption(image.caption || '');
        }
    }, [image]);

    const handleSave = async () => {
        if (!image) return;

        setLoading(true);
        try {
            const updatedImage = await updateCaption(image.id, caption);
            message.success('Caption updated successfully!');
            onSave(updatedImage);
            onClose();
        } catch (error) {
            console.error('Failed to update caption:', error);
            message.error('Failed to update caption. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Edit Caption"
            open={visible}
            onCancel={onClose}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Cancel
                </Button>,
                <Button
                    key="save"
                    type="primary"
                    loading={loading}
                    onClick={handleSave}
                >
                    Save Caption
                </Button>,
            ]}
        >
            <TextArea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Enter a new caption..."
                rows={4}
                style={{ marginTop: 16 }}
            />
        </Modal>
    );
};

export default EditCaptionModal;
