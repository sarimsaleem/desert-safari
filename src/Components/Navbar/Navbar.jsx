import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links" href="/"><Link className='link' to="/">Home</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links" ><Link className='link' to="/about">About Us</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <NavDropdown className="nav-links" title="Desert Safari Dubai" id="basic-nav-dropdown">
                                <div className="dropDawn-cont">
                                    <Row>
                                        <Col md={6}>
                                            <NavDropdown.Item className='drop-items' >Action</NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'>Another action</NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'>Something</NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'>Something</NavDropdown.Item>
                                        </Col>
                                        <Col md={6}>
                                            <NavDropdown.Item className='drop-items'>Separated link</NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'>Separated link</NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'>Separated link</NavDropdown.Item>
                                        </Col>
                                    </Row>
                                </div>
                            </NavDropdown>
                        </div>

                        <div className='nav-link-parent'>
                            <NavDropdown className="nav-links" title="All Packages" id="basic-nav-dropdown">
                                <div className="dropDawn-cont">
                                    <Row>
                                        <Col md={6}>
                                            <NavDropdown.Item className='drop-items'><Link to="/combotours">Combo Tour</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link to="/cruisedinner">Cruise Dinner</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link to="/dubaicitytour">Dubai City Tour</Link></NavDropdown.Item>
                                        </Col>
                                        <Col md={6}>
                                            <NavDropdown.Item className='drop-items'><Link to="/abudhabicitytour">Abu Dhabi Tour</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link to="/quadbike">Quadbike</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link to="/sightseeing">Sight Seeing</Link></NavDropdown.Item>
                                        </Col>
                                    </Row>
                                </div>
                            </NavDropdown>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links"><Link className='link' to="/contact">Contact</Link></Nav.Link>
                        </div>
                        <div className='nav-link-parent'>
                            <Nav.Link className="nav-links"><Link className='link' to="/blog">Blog</Link></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
