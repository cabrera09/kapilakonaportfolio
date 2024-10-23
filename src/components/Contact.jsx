import React from 'react';
import './contact.css'; // Import the CSS file
import linkedinImg from './linkedin.png'; // Replace with your actual icon path
import gmailImg from './gmail.png'; // Replace with your actual icon path
import githubImg from './github.png'; // Replace with your actual icon path

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <p>Feel free to reach out!</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/jaylord-cabrera-a9953b331/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImg} alt="LinkedIn" className="social-icon" />
                            LinkedIn/jaylord
                        </a>
                        <a href="mailto:your-email@gmail.com">
                            <img src={gmailImg} alt="Gmail" className="social-icon" />
                            Gmail/cabrerajaylord@email.com
                        </a>
                        <a href="https://github.com/cabrera09" target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="GitHub" className="social-icon" />
                            GitHub/cabrera09
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
