import React, { useEffect, useRef } from "react";
import {
    init,
} from "ityped";
import "./Screens.scss";

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
        <div
            className="outerWrapper">
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                <div
                    className="circle">
                </div>
                <p className="authorName">I'm Dhanjay Bhardwaj.</p>
            </div>

            <p className="professionName">I'm a <span ref={textRef}></span></p>
            <p className="professionName">Based in India. </p>
        </div>
    );
}