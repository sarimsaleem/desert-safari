import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png"
import "./navbar.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links" href="/"><Link className='link' to="/">Home</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links" href="#link"> <Link className='link' to="about">About Us</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <NavDropdown className="nav-links" title="Desert Safari Dubai" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='nav-link-parent'>
                            <NavDropdown className="nav-links" title="All Packages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links" href="#link"><Link className='link' to="/contact">Contact</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links" href="#link"><Link className='link' to="/blog">Blog</Link></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
