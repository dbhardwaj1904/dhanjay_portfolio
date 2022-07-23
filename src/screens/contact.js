import React from "react";
import TextField from '@mui/material/TextField';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./contact.scss";

export default function Contact() {
    return (
        <div className="outerWrapper">


            <div className="cornerHalf">
                {/* {Social Media links} */}
            </div>


            <div className="leftHalf">
                {/* {Add Image} */}
            </div>



            <div className="middleHalf">

                <div className="intro">
                    <div className="circle"></div>
                    <p className="authorName">Contact me</p>
                </div>

                <div>
                    <h1 className="contactHeading">Get in touch with me today</h1>
                </div>

                <div>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        style={{
                            width: 200,
                            height: 80,
                        }} />
                    <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        style={{
                            marginLeft: 50,
                            width: 200,
                            height: 80,
                        }} />
                    <br />
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Write your message"
                            variant="outlined"
                            multiline
                            style={{
                                width: 450,
                                height: 80,
                            }} />
                    </div>
                    <button style={{ backgroundColor: "#ffa500", border: 0, width: 150, height: 50}}><h3>Send Message</h3></button>
                </div>
            </div>




            <div className="rightHalf">

                {/* {Hamburger menu and bottom slide show vertoca; navigation} */}
            </div>
        </div>
    );
}