import React, {
    useState
} from "react";
import {
    Link,
} from "react-router-dom";
import * as ContactIcon from "react-icons/io";
import * as MailIcon from "react-icons/ai";
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
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "70%",
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
                <div style={{display: "flex", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
                    <h4> Minimalist. </h4>
                </div>

                {/* Middle Nav */}
                <nav className="inner-middle-wrapper">
                    <div className="home-nav-container">
                        <Link
                            to="/"
                            className="link-nav">Home</Link>
                    </div>
                    <div className="about-me-nav-container">
                        <Link
                            to="/aboutme"
                            className="link-nav">About&nbsp;Me</Link>
                    </div>
                    <div className="experience-nav-container">
                        <Link
                            to="/experience"
                            className="link-nav">Experience</Link>
                    </div>
                    <div className="skills-nav-container">
                        <Link
                            to="/skills"
                            className="link-nav">Skills</Link>
                    </div>
                </nav>


                {/* Right Nav OR Hamburger menu 
                <div className="inner-right-wrapper">
                    <div className="contact-icon">
                        <ContactIcon.IoIosContact
                            size={25}
                            onClick={openModal} />
                    </div>
                </div>
                */}


            </div>

            <Modal
                isOpen={modal}
                style={customStyles}
            >
                <h2 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>CONTACT FORM</h2>
                <div className="contact-form-outer-wrapper">

                    {/* Inner Left Side */}
                    <div className="contact-form-inner-left-wrapper">
                        <MailIcon.AiFillMail size={50} style={{margin: 15}} color="red"/>
                        <ContactIcon.IoMdCall size={50} style={{margin: 15}} color="skyblue"/>
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
                                width: 200,
                                height: 80,
                            }} />
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                            style={{
                                width: 200,
                                height: 80,
                            }} />
                        <br />
                        <div style={{ marginTop: "-30px" }}>
                            <p style={{ marginBottom: "5px", fontSize: "20px", marginLeft: "5px" }}>Message:</p>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Type your message..."
                                style={{
                                    width: 195,
                                    height: 100,
                                    borderColor: "#bfbfbf",
                                    borderRadius: "5px",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyItems: 'center',
                    marginTop: 50
                    }}>
                    <button style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyItems: 'center',
                        height: 50,
                        width: 200,
                        fontSize: 18,
                        backgroundColor: '#ffa500',
                        border: 0,
                        fontWeight: 'bold'
                        }} >
                            Send message
                        </button>
                </div>
                


            </Modal>

        </>
    );
}