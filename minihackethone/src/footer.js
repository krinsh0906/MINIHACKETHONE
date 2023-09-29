import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>
                        DAILY AGENDA.
                    </h2>
                </div>
                <div className="footer-info">
                    <h3>Contact Information</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Todolist</a></li>
                        <li><a href="/services">Contactus</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">

                <p>&copy; {new Date().getFullYear()} DAILY AGENDA. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
