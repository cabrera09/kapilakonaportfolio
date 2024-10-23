import React, { useState, useEffect } from 'react';
import './navbar.css'; // Import the CSS file
import myImage from './my.jpg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [menuOpen]);

    return (
        <header>
            <nav>
                <div className="logo">MyPortfolio</div>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {/* Image with description */}
            <div className="image-container">
                <img src={myImage} alt="Your Portfolio" />
                <div className="image-description">
                     <h3>Jaylord Cabrera</h3>
                    <p>Passionate Developer | Creative Designer | Back-End Enthusiast</p>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
