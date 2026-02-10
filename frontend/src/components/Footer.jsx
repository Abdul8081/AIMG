import React from 'react';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FileTextOutlined } from '@ant-design/icons';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Logo size={28} />
                        <span className="footer-brand-text">AIGALLARYIMAGE</span>
                    </div>

                    <div className="footer-links">
                        <a
                            href="mailto:amuid677@gmail.com"
                            className="footer-link"
                            aria-label="Email"
                        >
                            <MailOutlined /> amuid677@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdul-muid-00973b264/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                            aria-label="LinkedIn"
                        >
                            <LinkedinOutlined /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/Abdul8081"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                            aria-label="GitHub"
                        >
                            <GithubOutlined /> GitHub
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1n_hijGets16GIBhEKyy00QKBdgI03BIH/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link footer-resume-link"
                            aria-label="My Resume"
                        >
                            <FileTextOutlined /> My Resume
                        </a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <p className="footer-credit">
                    © 2026 Abdul Muid | Built with ❤️ and ☕
                </p>
            </div>
        </footer>
    );
};

export default Footer;
