import React from "react";

import { Navbar } from "react-bootstrap";
import githubLogo from "../img/github.svg";

function Footer() {
    return (
        <div className="fixed-bottom">

            <Navbar expand="lg" bg="light">
                <div>Crafted with <span style={{ color: "#e25555" }}>&#9829;</span> by Chi Li. - </div>
                <div style={{ paddingBottom: 5 }}><a href="https://github.com/ChiShingLi/">&nbsp;<img src={githubLogo} width={20}></img></a></div>
            </Navbar>
        </div>
    )
}



export default Footer