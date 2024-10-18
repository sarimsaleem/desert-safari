import React from 'react'
import "./About.css"
import header from "../assets/header.jpg"

const About = () => {
    return (
        <div className="about-parent">
            <div className='image-detail-container'>
                <img src={header} alt="" />
                <h1 className='image-text-container'>About Desert Safari UAE</h1>
            </div>
            <div className='container'>
                <p className='about-p'>Desert Safari UAE is one of the reputed <span className='about-p-head'>Tourism Company in Dubai</span> country UAE with hopes, desire and a clear concept of doing commerce. Desert Safari Dubai is a young and thrilling destination management company based in UAE, the regional hub of Globe Class tourism. The company is recognized for professionalism, inspiring operational communications, personalized service and imaginative itineraries that facilitate us to provide clients with the most unforgettable experience. Having made the habit of keeping customers happy with outstanding service, we are fully equipped to assist you in planning organizing and satisfying your needs for group, inducement and individual tours and excursions. The company has set supreme standards of performance; you can depend on us to organize it greatest for you.</p>
                <h1 className='abouut-heading'>MISSION & VISION</h1>
                <p className='about-p'>Our Mission is to provide outstanding service to each of our clientele and partners. We perform ourselves to the repeated improvement of our processes and fulfillment to requirements during the implementation of our business. To be leaders and tendency setters in the travel industry, in all avenues of business that we are linked with and utilizing all our Labours and elegant services not only during our visitors visit but also accomplish long term associations forever to be recognized as a leading supplier of quality travel and tourism related services international.
                </p>
                <h1 className='abouut-heading'>WHY CHOOSE US?</h1>
                <p className='about-p'>Desert Safari UAE is planning to become the middle service platform for tourism industry. Therefore the company’s main objective is to achieve maximum market diffusion and to increase the revenue figures for its worldwide customers. We plans to win a large number of extra clientele and to strengthen its worldwide market leadership as destination marketing expert.
                </p>
            </div>
        </div>
    )
}

export default About