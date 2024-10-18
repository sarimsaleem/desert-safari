import React, { useState } from 'react';
import "./crousel.css";
import Carousel from 'react-bootstrap/Carousel';
import crousel from "../../assets/main crousel.png";
import whatsapp from "../../assets/whatsapp.png"
const Crousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="crousel">
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
                <Carousel.Item>
                    <img className='crousel-image' src={crousel} alt="" />
                </Carousel.Item>
            </Carousel>
            <a href="https://api.whatsapp.com/send?phone=971557355443" target="_blank" ><img src={whatsapp} alt="" className='whatsappLogo' /></a>
        </div>
    );
}

export default Crousel;
