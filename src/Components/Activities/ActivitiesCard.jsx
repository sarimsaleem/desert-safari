import React from 'react';
import data from '../../Json/Activity.json';
import "./activities.css";
import { FaPersonWalkingLuggage } from 'react-icons/fa6';

const ActivitiesCard = () => {
  return (
    <div className='activities-parent'>
      <div className="container">
        <h1 className='act-main-heading'>Dubai Desert Safari – Most Popular Desert Safari Company in Dubai</h1>
        <div className='faqs-parent'>
          Book and Go  <span className='faqs'> _____ </span><FaPersonWalkingLuggage className='personLuagage' />
        </div>
        <h2 className='act-sub-head'>Desert Safari Activities</h2>
        <div className="row">
          {data?.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 act-card">
                <div className="image-container">
                  <img src={item.image_url} className="card-img-top" alt={item.event_name} />
                  <h6 className="image-text">{item.image_text}</h6> {/* Overlay text */}
                </div>
                <div className="card-body">
                  <div className='card-sub-body'>
                    <h3 className="card-title">{item.event_name}</h3>
                    <h4 className="card-subtitle mb-2">{item.most_popular}</h4>
                    <h3 className="card-text"><sup className='currency'>AED</sup>{item.price}</h3>
                  </div>
                  <button className="btn act-btn"><a href="">{item.book}</a></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
