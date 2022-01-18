import React, {
} from "react";
import {
    Link,
} from "react-router-dom";
import "./topNav.css";
import * as ContactIcon from "react-icons/io";

export default function TopNav() {
    
    return (
        <div className="outer-wrapper-container">
            
            {/* Left Nav */}
            <div className="inner-left-wrapper">
                <h2> Portfolio. </h2>
            </div>

            {/* Middle Nav */}
            <div className="inner-middle-wrapper">
                <div className="home-nav-container">
                    <Link
                        to="/"
                        className="home-link-nav" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                </div>
                <div className="about-me-nav-container">
                    <Link
                        to="/aboutme"
                        className="about-me-link-nav" style={{ textDecoration: 'none', color: 'black' }}>About&nbsp;Me</Link>
                </div>
                <div className="experience-nav-container">
                    <Link
                        to="/experience"
                        className="experience-link-nav" style={{ textDecoration: 'none', color: 'black' }}>Experience</Link>
                </div>
                <div className="skills-nav-container">
                    <Link
                        to="/skills"
                        className="skills-link-nav" style={{ textDecoration: 'none', color: 'black' }}>Skills</Link>
                </div>
            </div>


            {/* Right Nav OR Hamburger menu */}
            <div className="inner-right-wrapper">
                <div className="contact-icon">
                <ContactIcon.IoIosContact size={45} />
                </div>
            </div>

        </div>
    );
}