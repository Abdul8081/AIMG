import React from 'react';
import { Button } from 'antd';
import { RocketOutlined, CloudUploadOutlined, RobotOutlined, TagsOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-glow"></div>
                <div className="hero-content">
                    <div className="hero-logo">
                        <Logo size={72} />
                    </div>
                    <h1 className="hero-headline">
                        AI Image Metadata &<br />
                        <span className="hero-highlight">Caption Generator</span>
                    </h1>
                    <p className="hero-description">
                        Upload your images and let AI analyze them instantly.
                        Get auto-generated captions, smart tags, and rich metadata —
                        all powered by Google's Gemini Vision API.
                    </p>
                    <Button
                        type="primary"
                        size="large"
                        icon={<RocketOutlined />}
                        className="hero-cta"
                        onClick={() => navigate('/gallery')}
                    >
                        Try AI Gallery
                    </Button>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2 className="section-heading">How It Works</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-icon">
                            <CloudUploadOutlined />
                        </div>
                        <h3>Upload</h3>
                        <p>Drag & drop or click to upload your JPEG/PNG images</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">
                            <RobotOutlined />
                        </div>
                        <h3>AI Analysis</h3>
                        <p>Gemini Vision API analyzes your image in real-time</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">
                            <TagsOutlined />
                        </div>
                        <h3>Metadata & Tags</h3>
                        <p>Get auto-generated captions, tags, and rich metadata</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">
                            <EditOutlined />
                        </div>
                        <h3>Edit & Refine</h3>
                        <p>Fine-tune captions to match your needs</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
