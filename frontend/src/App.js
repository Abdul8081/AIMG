import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <BrowserRouter>
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
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </ConfigProvider>
        </BrowserRouter>
    );
}

export default App;
