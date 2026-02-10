import React from 'react';
import { Button, Tooltip } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FileTextOutlined } from '@ant-design/icons';
import Logo from './Logo';
import ShuffleText from './ShuffleText';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-brand">
                    <Logo size={36} />
                    <ShuffleText
                        text="AIGALLARYIMAGE"
                        className="navbar-title"
                    />
                </div>

                <div className="navbar-links">
                    <Tooltip title="amuid677@gmail.com">
                        <a
                            href="mailto:amuid677@gmail.com"
                            className="navbar-icon-link"
                            aria-label="Email"
                        >
                            <MailOutlined />
                        </a>
                    </Tooltip>

                    <Tooltip title="LinkedIn">
                        <a
                            href="https://www.linkedin.com/in/abdul-muid-00973b264/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-icon-link"
                            aria-label="LinkedIn"
                        >
                            <LinkedinOutlined />
                        </a>
                    </Tooltip>

                    <Tooltip title="GitHub">
                        <a
                            href="https://github.com/Abdul8081"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-icon-link"
                            aria-label="GitHub"
                        >
                            <GithubOutlined />
                        </a>
                    </Tooltip>

                    <a
                        href="https://drive.google.com/file/d/1n_hijGets16GIBhEKyy00QKBdgI03BIH/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button-link"
                    >
                        <Button
                            type="primary"
                            icon={<FileTextOutlined />}
                            className="resume-button"
                        >
                            My Resume
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
