import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaCcMastercard } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    {/* Column 1: About */}
                    <Col md={4}>
                        <h5 className='footer-heading'>About</h5>
                        <p className='footer-text'>
                            Desert Safari UAE – offer the Dubai City Tour, Sightseeing Tours, Dubai Combo Tour, Dinner Cruise, and all-inclusive packages for different kinds of desert safari in Dubai with Pick & Drop, BBQ, and Camel Ride. Desertsafariuae.ae is the most distinguished Dubai City Tour and Desert Safari Company in Dubai, UAE. 100% Customer Satisfaction, 5-Star Rating Desert Safari Company in Dubai.
                        </p>
                    </Col>

                    {/* Column 2: Desert Safari Dubai */}
                    <Col md={4}>
                        <h5 className='footer-heading'>Desert Safari Dubai</h5>
                        <div className='footer-video'>
                            <iframe
                                width="100%"
                                height="200"
                                src="https://www.youtube.com/embed/_4YnHwUoANI"
                                title="Desert Safari Dubai"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>

                    {/* Column 3: Contact Us */}
                    <Col md={4} > 
                    <div className="contact-sec">
                        <h5 className='footer-heading'>Contact Us</h5>
                        <div className='footer-contact'>
                            <p>Email: <a href="mailto:info@desertsafariuae.ae" className='footer-link'>info@desertsafariuae.ae</a></p>
                            <p>Phone: <a href="tel:+00971557355443" className='footer-link'>+971 50 000 0000</a></p>
                            <p>Phone: <a href="tel:+00971557355443" className='footer-link'>00971557355443</a></p>
                        </div>
                        <div className='footer-icons'>
                            <FaFacebookF className='footer-icon' />
                            <FaWhatsapp className='footer-icon' />
                            <FaInstagram className='footer-icon' />
                            <FaCcMastercard className='footer-icon' />
                        </div>
                        </div>
                    </Col>
                </Row>
                {/* All Rights Reserved Line */}
                <Row>
                    <Col className='text-center footer-bottom'>
                        <p>© 2024 Desert Safari UAE. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
