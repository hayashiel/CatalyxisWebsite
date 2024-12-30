// Imports to Navbar
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-boostrap/NavDropdown';


export function NavBarTemplate({props}) {
    let theme = props.theme;
    return (
        <Navbar expand="lg" className="bg-body-teritary" bg={theme} data-bs-theme="primary">
            <Container>
                <Navbar.Brand href="#home">Catalyxis</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#AboutUs">About Us</Nav.Link>
                        <Nav.Link href="#Features">Features</Nav.Link>
                        <NavDropdown title="Participate!" id="basic-nav-dropdown">
                            <NavDropdown.Item href='#action/3.1'> Sign-Up </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'> Contact Us </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'> Newsletter Sign-Up </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Research" id="basic-nav-dropdown">
                            <NavDropdown.Item href='#action/3.1'> Publications</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'> Research Opportunities </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'> Pages </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}