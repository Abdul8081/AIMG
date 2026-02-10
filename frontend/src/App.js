import React from 'react';
import { ConfigProvider, theme } from 'antd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: '#667eea',
                    borderRadius: 8,
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                },
            }}
        >
            <div className="app-container">
                <Navbar />
                <main className="app-main">
                    <header className="app-header">
                        <p className="app-subtitle">
                            Upload images and get AI-generated captions and tags
                        </p>
                    </header>
                    <Gallery />
                </main>
                <Footer />
            </div>
        </ConfigProvider>
    );
}

export default App;
