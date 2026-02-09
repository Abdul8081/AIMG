import React from 'react';
import { Tag, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getImageUrl } from '../services/api';

const ImageCard = ({ image, onEditCaption }) => {
    const { id, caption, tags } = image;

    const tagColors = [
        '#667eea', '#764ba2', '#f093fb', '#5a67d8',
        '#805ad5', '#d53f8c', '#38b2ac', '#4fd1c5'
    ];

    return (
        <div className="image-card">
            <div className="image-wrapper">
                <img
                    src={getImageUrl(id)}
                    alt={caption || 'Uploaded image'}
                    loading="lazy"
                />
            </div>
            <div className="image-content">
                <p className="image-caption">
                    {caption || 'No caption available'}
                </p>
                <div className="tags-container">
                    {tags && tags.map((tag, index) => (
                        <Tag
                            key={index}
                            color={tagColors[index % tagColors.length]}
                        >
                            {tag}
                        </Tag>
                    ))}
                </div>
                <div className="image-actions">
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => onEditCaption(image)}
                        size="small"
                    >
                        Edit Caption
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
