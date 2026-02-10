import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { uploadImage } from '../services/api';

const { Dragger } = Upload;

const ImageUpload = ({ onUploadSuccess, onUploadStart, onUploadEnd }) => {
    const handleUpload = async (options) => {
        const { file, onSuccess, onError, onProgress } = options;

        // Signal that an upload has started (triggers skeleton)
        if (onUploadStart) onUploadStart();

        try {
            onProgress({ percent: 30 });

            const result = await uploadImage(file);

            onProgress({ percent: 100 });
            onSuccess(result);

            message.success(`${file.name} uploaded successfully! AI caption generated.`);

            if (onUploadSuccess) {
                onUploadSuccess(result);
            }
        } catch (error) {
            console.error('Upload error:', error);
            onError(error);
            message.error(`${file.name} upload failed. Please try again.`);
        } finally {
            // Signal that the upload has ended (removes skeleton)
            if (onUploadEnd) onUploadEnd();
        }
    };

    const uploadProps = {
        name: 'image',
        multiple: true,
        accept: 'image/jpeg,image/png',
        customRequest: handleUpload,
        showUploadList: false,
        beforeUpload: (file) => {
            const isValidType = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isValidType) {
                message.error('You can only upload JPEG or PNG files!');
                return false;
            }
            const isLt10M = file.size / 1024 / 1024 < 10;
            if (!isLt10M) {
                message.error('Image must be smaller than 10MB!');
                return false;
            }
            return true;
        },
    };

    return (
        <div className="upload-container">
            <Dragger {...uploadProps}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ fontSize: 48, color: '#667eea' }} />
                </p>
                <p className="ant-upload-text">Click or drag images to upload</p>
                <p className="ant-upload-hint">
                    Support for JPEG and PNG images. AI will automatically generate captions and tags.
                </p>
            </Dragger>
        </div>
    );
};

export default ImageUpload;
