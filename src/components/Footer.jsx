import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/image/Logo.png";

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="navbar-brands">
                    <div className="nav-logo">
                        <div className="logo" style={{ backgroundImage: `url(${Logo})` }}></div>
                    </div>
                </div>
                <p className="description">
                    For the latest updates, subscribe to our newsletter and get exclusive
                    <br />
                    news, giveaways and freebies
                </p>
                <div className="subscribe-box">
                    <input type="email" placeholder="Your Email Address" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <p className="copyright">
                © Copyright 2021 | All rights reserved
            </p>
        </div>
    );
};

export default Footer;
