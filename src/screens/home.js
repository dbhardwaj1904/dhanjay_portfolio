import React, { useEffect, useRef } from "react";
import {
    init,
} from "ityped";
import "./Screens.scss";
import Snowfall from 'react-snowfall'

export default function Home() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Software Engineer"],
        });
    }, []);

    return (
        <div>
            
            <Snowfall color="#fff" snowflakeCount={200}/>
            <div className="outerWrapper-left-pane">
                <h1>Test Page1</h1>
            </div>

            <div className="outerWrapper-middle-pane">
                <div className="intro">
                    <div className="circle"></div>
                    <p className="authorName">I'm Dhanjay Bhardwaj.</p>
                </div>

                <p className="professionName">I'm a <span ref={textRef}></span></p>
                <p className="professionName" style={{marginTop: "-3%"}}>Based in India. </p>
                <div style={{marginTop: "2%"}}>
                    <button style={{ backgroundColor: "#ffa500", border: 0, width: 100, height: 40, fontWeight: "bold" }}>My Portfolio</button>
                    <button style={{ border: 0, backgroundColor: "transparent", fontWeight: "bold" }}>Read More</button>
                </div>
            </div>

            <div className="outerWrapper-right-pane">
                <h1 style={{position: 'absolute', right: 0}}>Test Page2</h1>
            </div>
        </div>

    );
}