import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined, MailOutlined, CloseOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import ShuffleText from './ShuffleText';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'TryAIGallery', path: '/gallery' },
    { label: 'About', path: '/about' },
];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
        setDrawerOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                {/* LEFT — Logo + Title */}
                <div className="navbar-brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <Logo size={36} />
                    <ShuffleText
                        text="AIGALLARYIMAGE"
                        className="navbar-title navbar-title-desktop"
                    />
                </div>

                {/* CENTER — Nav Links (desktop) */}
                <div className="navbar-nav-center">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) =>
                                `navbar-nav-link ${isActive ? 'navbar-nav-link-active' : ''}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* RIGHT — Email (desktop) */}
                <div className="navbar-right-desktop">
                    <a href="mailto:amuid677@gmail.com" className="navbar-email-link">
                        <MailOutlined /> amuid677@gmail.com
                    </a>
                </div>

                {/* MOBILE — Hamburger */}
                <button
                    className="navbar-hamburger"
                    onClick={() => setDrawerOpen(true)}
                    aria-label="Open menu"
                >
                    <MenuOutlined />
                </button>
            </div>

            {/* MOBILE — Drawer */}
            <Drawer
                title={null}
                placement="right"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                width={280}
                className="navbar-drawer"
                closeIcon={<CloseOutlined style={{ color: '#a0aec0', fontSize: 18 }} />}
                styles={{
                    body: { padding: 0, background: '#0f0f23' },
                    header: { background: '#0f0f23', borderBottom: '1px solid rgba(255,255,255,0.06)' },
                }}
            >
                <div className="drawer-menu">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) =>
                                `drawer-link ${isActive ? 'drawer-link-active' : ''}`
                            }
                            onClick={() => setDrawerOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <div className="drawer-divider"></div>
                    <a
                        href="mailto:amuid677@gmail.com"
                        className="drawer-link drawer-email"
                        onClick={() => setDrawerOpen(false)}
                    >
                        <MailOutlined /> amuid677@gmail.com
                    </a>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;
