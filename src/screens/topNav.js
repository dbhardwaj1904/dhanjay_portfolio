import React from "react";
import {
    Link,
} from "react-router-dom";

export default function TopNav() {
    return (
        <div>
            <Link to="/"> Home </Link><br />
            <Link to="/aboutme">About me</Link><br />
            <Link to="/experience">Experience</Link><br />
            <Link to="/skills">Skills</Link><br />
            <Link to="/contact">Contact</Link>
        </div>
    );
}