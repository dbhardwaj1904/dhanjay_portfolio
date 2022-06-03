import React from "react";
import TextField from '@mui/material/TextField';
import TextareaAutosize from "@mui/material/TextareaAutosize";


export default function Contact() {
    return (
        <>
            {/* Inner Right Side */}
            <div>
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
        </>
    );
}