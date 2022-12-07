import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

const NavbarFixed = () => (

    <Navbar bg="light" expand="lg">
        <Link to="/" className="navbar-brand">
            My App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/github" className="nav-link">
                    Github
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default NavbarFixed;