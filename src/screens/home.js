import React, { useEffect, useRef } from "react";
import {
    init,
} from "ityped";
import "./Screens.scss";

export default function Home(){

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
        <>
        <h2>Hi There, I'm</h2>
        <h1>Dhanjay Bhardwaj</h1>
        <h3><span ref={textRef}></span></h3>
        </>
    );
}