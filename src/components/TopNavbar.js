import React from "react";

import { Navbar, Nav } from 'react-bootstrap';

function TopNavbar() {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">CoVid-19 Stats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )


}

export default TopNavbar