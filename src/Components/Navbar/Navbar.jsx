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
        <Navbar expand="lg" className="bg-body-tertiary header">
            <Container>
                <Navbar.Brand className='navbar-brand' href="/"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
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
                                <div className="dropDawn-cont1">
                                    <Row>
                                        <Col md={6}>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/evening-desert-safari">Evening Desert Safari</Link></NavDropdown.Item>
                                            <div className='divider'></div> 
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks'  to="/overnight-desert-safari">Overnight Desert Safari</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/luxury-desert-safari">Luxury Desert Safari</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/private-desert-safari">Private Desert Safari</Link></NavDropdown.Item>
                                        </Col>
                                        <Col md={6}>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/morning-desert-safari">Morning Desert Safari</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/vip-desert-safari">VIP Desert Safari</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/quadbike-desert-safari">Desert Safari With Quad Bike</Link></NavDropdown.Item>
                                            <div className='divider'></div>
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
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/combotours">Combo Tour</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/cruisedinner">Cruise Dinner</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/dubaicitytour">Dubai City Tour</Link></NavDropdown.Item>
                                        </Col>
                                        <Col md={6}>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/abudhabicitytour">Abu Dhabi Tour</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/quadbike">Quadbike</Link></NavDropdown.Item>
                                            <div className='divider'></div>
                                            <NavDropdown.Item className='drop-items'><Link className='dropDownLinks' to="/sightseeing">Sight Seeing</Link></NavDropdown.Item>
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
