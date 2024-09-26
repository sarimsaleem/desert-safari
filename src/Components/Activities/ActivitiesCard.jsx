import React from 'react';
import data from '../../Json/Activity.json';
import "./activities.css";
import { FaPersonWalkingLuggage } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
const ActivitiesCard = () => {

  const navigate = useNavigate()

  const handleClick = (obj = {}) => {
    navigate("/details", { state: obj })
  }

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
              <div onClick={() => handleClick(item)} className="card h-100 act-card">
                <div className="image-container">
                  {item?.image_url ? <img src={item.image_url} className="card-img-top" alt={item.event_name} /> : null}
                  {item?.image_text ? <h6 className="image-text">{item.image_text}</h6> : null}
                </div>
                <div className="card-body">
                  <div className='card-sub-body'>
                    <div className="title-container">
                      {item?.event_name ? <h3 className="card-title">{item.event_name} &nbsp;</h3> : null}
                      {item?.most_popular ? <span className='most-popular'>Most Popular </span> : null}
                    </div>
                    {item?.price ? <h3 className="card-text"><sup className='currency'>AED</sup>{item.price}</h3> : null}
                  </div>
                  {item?.book ? <button className="btn act-btn"><a href="">{item.book}</a></button> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
