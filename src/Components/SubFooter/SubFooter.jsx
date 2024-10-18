import React from 'react';
import { FaChevronRight } from 'react-icons/fa'; // Import an icon from react-icons
import "./subfooter.css";
import "../colors/Colors.css"
const SubFooter = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <h3>UAE Activities</h3>
        <ul>
          <li><FaChevronRight /><a href="#"> Desert Safari Dubai Packages</a></li>
          <li><FaChevronRight /><a href="#"> Sightseeing Tours</a></li>
          <li><FaChevronRight /><a href="#"> Cruise Dinner</a></li>
          <li><FaChevronRight /><a href="#"> Combo Tours</a></li>
        </ul>
      </div>

      <div className="grid-item">
        <h3>Top Selling Tours</h3>
        <ul>
          <li><FaChevronRight /><a href="#"> Desert Safari by Bus Most Popular</a></li>
          <li><FaChevronRight /><a href="#"> Evening Desert Safari Most Popular</a></li>
          <li><FaChevronRight /><a href="#"> Red Dune Bashing Desert Safari</a></li>
          <li><FaChevronRight /><a href="#"> Desert Safari (Gold) Most Popular</a></li>
          <li><FaChevronRight /><a href="#"> Silver Desert Safari in Dubai</a></li>
          <li><FaChevronRight /><a href="#"> Camel Ride Dubai</a></li>
          <li><FaChevronRight /><a href="#"> Desert Safari with Quad Bike</a></li>
          <li><FaChevronRight /><a href="#"> Morning Desert Safari Most Popular</a></li>
          <li><FaChevronRight /><a href="#"> Hummer Desert Safari</a></li>
        </ul>
      </div>

      <div className="grid-item">
        <h3>Top Selling Tours</h3>
        <ul>
          <li><FaChevronRight /><a href="#"> Dubai City Tour Most Popular</a></li>
          <li><FaChevronRight /><a href="#"> Abu Dhabi City Tour Most Popular</a></li>
          <li><FaChevronRight /><a href="#"> Hatta Mountain Safari</a></li>
          <li><FaChevronRight /><a href="#"> Fujairah City Tour</a></li>
          <li><FaChevronRight /><a href="#"> Al Ain City Tour</a></li>
          <li><FaChevronRight /><a href="#"> Oman Musandam Tour</a></li>
          <li><FaChevronRight /><a href="#"> Marina Cruise Dinner Most Popular</a></li>
          <li><FaChevronRight /><a href="#"> Dhow Cruise Dinner Most Popular</a></li>
        </ul>
      </div>

      <div className="grid-item">
        <h3>Top Selling Tours</h3>
        <ul>
          <li><FaChevronRight /><a href="#"> Abu Dhabi And Ferrari World</a></li>
          <li><FaChevronRight /><a href="#"> Dubai City Tour + Desert Safari</a></li>
          <li><FaChevronRight /><a href="#"> Dubai City Tour + Dhow Cruise Dinner</a></li>
          <li><FaChevronRight /><a href="#"> Dubai City Tour + Marina Cruise Dinner</a></li>
          <li><FaChevronRight /><a href="#"> Abu Dhabi + Marina Cruise Dinner</a></li>
          <li><FaChevronRight /><a href="#"> Abu Dhabi + Dhow Cruise Dinner</a></li>
          <li><FaChevronRight /><a href="#"> Dubai City Tour + Desert Safari + Dhow Cruise Dinner + Abu Dhabi City Tour</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SubFooter;
