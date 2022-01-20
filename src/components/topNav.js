import React, {
    useState
} from "react";
import {
    Link,
} from "react-router-dom";
import * as ContactIcon from "react-icons/io";
import Modal from "react-modal";
import TextField from '@mui/material/TextField';
import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./topNav.css";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)"
    }
}

export default function TopNav() {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            <div className="outer-wrapper-container">

                {/* Left Nav */}
                <div className="inner-left-wrapper">
                    <h2> Portfolio. </h2>
                </div>

                {/* Middle Nav */}
                <nav className="inner-middle-wrapper">
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
                </nav>


                {/* Right Nav OR Hamburger menu */}
                <div className="inner-right-wrapper">
                    <div className="contact-icon">
                        <ContactIcon.IoIosContact
                            size={45}
                            onClick={openModal} />
                    </div>
                </div>


            </div>

            <Modal
                isOpen={modal}
                style={customStyles}
            >
                <h2>CONTACT FORM</h2>
                <div className="contact-form-outer-wrapper">

                    {/* Inner Left Side */}
                    <div className="contact-form-inner-left-wrapper">
                        <p>ICONS</p>
                    </div>



                    {/* Inner Middle Side */}
                    <div className="contact-form-inner-middle-wrapper">
                    </div>



                    {/* Inner Right Side */}
                    <div className="contact-form-inner-right-wrapper">
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            style={{
                                width: 300,
                                height: 100,
                            }} />
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                            style={{
                                width: 300,
                                height: 100,
                            }} />
                        <br />
                        <div style={{ marginTop: "-30px" }}>
                            <p style={{ marginBottom: "5px", fontSize: "20px", marginLeft: "5px" }}>Message:</p>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Type your message..."
                                style={{
                                    width: 295,
                                    height: 100,
                                    borderColor: "#bfbfbf",
                                    borderRadius: "5px",
                                }}
                            />
                        </div>
                    </div>
                </div>


            </Modal>

        </>
    );
}