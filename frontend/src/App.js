import React from 'react';
import { ConfigProvider, theme } from 'antd';
import Gallery from './pages/Gallery';

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: '#667eea',
                    borderRadius: 8,
                },
            }}
        >
            <div className="app-container">
                <header className="app-header">
                    <h1 className="app-title">AI Image Gallery</h1>
                    <p className="app-subtitle">Upload images and get AI-generated captions and tags</p>
                </header>
                <Gallery />
            </div>
        </ConfigProvider>
    );
}

export default App;
