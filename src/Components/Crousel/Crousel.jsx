import React, { useState } from 'react';
import "./crousel.css";
import Carousel from 'react-bootstrap/Carousel';
import crousel from "../../assets/main crousel.png";
import { RiWhatsappFill } from "react-icons/ri";
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
            <a href="https://chatgpt.com/c/66f42609-34a0-800d-a966-56a5fe962d4f"><img src={whatsapp} alt="" className='whatsappLogo' /></a>
        </div>
    );
}

export default Crousel;
