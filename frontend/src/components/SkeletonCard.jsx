import React from 'react';
import { Skeleton } from 'antd';

const SkeletonCard = () => {
    return (
        <div className="image-card skeleton-card">
            <div className="image-wrapper skeleton-image-wrapper">
                <Skeleton.Image active className="skeleton-image" />
            </div>
            <div className="image-content">
                <Skeleton active paragraph={{ rows: 2 }} title={false} />
                <div className="tags-container" style={{ marginTop: 12 }}>
                    <Skeleton.Button active size="small" shape="round" style={{ width: 60, height: 24 }} />
                    <Skeleton.Button active size="small" shape="round" style={{ width: 80, height: 24 }} />
                    <Skeleton.Button active size="small" shape="round" style={{ width: 50, height: 24 }} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
