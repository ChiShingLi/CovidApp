import React from "react"

import { Container } from "react-bootstrap";

function About() {
    return (
        <div>
            <Container>
                <h1>About</h1>
                <h5> This React web app was created as an personal project.</h5>
                Please Note: The data presented on this site might not be accurate or complete.
                <br />
                 *All the COVID data are gathered from (http://covid19api.com/) API.
                 <br />
            </Container>

        </div>
    )
}
export default About