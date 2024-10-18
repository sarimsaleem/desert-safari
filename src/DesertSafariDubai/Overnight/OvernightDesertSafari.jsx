import React from 'react'
import data from "../../Json/data";
import { FaCheck } from 'react-icons/fa6';

const OvernightDesertSafari = () => {
  const filteredTours = data.filter(tour => tour.category.includes("Evening Desert Safari"));

  if (!filteredTours.length) return <p>No tours found</p>; 

  const tour = filteredTours[0]; 

  return (
    <div className='dubaisafari'>
      <div className="image-detail-container">
        {tour?.banner_image_url ? <img src={tour.banner_image_url} alt="" /> : null}
        <div className="image-text-container">
          {tour?.banner_text ? <h6 className='image-detail-text fs-1'>{tour.banner_text}</h6> : null}
          {tour?.price ? (
            <div className="price-container">
              <h6 className="image-from">From</h6>
              <h6 className="image-detail-text">
                <sup className="currency2">AED</sup>
                {tour.price}
              </h6>
            </div>
          ) : null}
        </div>
      </div>
      <div className="container">
        {tour?.special_note ? <div className="special-note mb-4">
          <p className='special-note-text'><span className='special-note-span'>Special Note:</span> {tour.special_note}</p>
        </div> : null}
        {tour?.description ? <div className="description">{tour.description}</div> : null}
        <div className="row">
          {tour?.content.map((section, index) => (
            <div key={index} className="col-12">
              {section?.title ? <h2 className='detail-head'>{section.title}</h2> : null}
              <div className="row">
                {section.data.map((item, idx) => (
                  <div key={idx} className="col-6">
                    <li className="detail-li d-flex align-items-center">
                      {!section?.hideItemIcon && <FaCheck className='checkIcon' />}
                      <div>
                        <p style={{ margin: 0 }}>
                          {item.item}
                          {item.itemDescription && <span>: {item.itemDescription}</span>}
                        </p>
                        {item.description ? (
                          <p style={{ margin: 0 }}>{item.description}</p>
                        ) : null}
                        {section?.book ? (
                          <div className="detail-btn">
                            <button>{section.book}</button>
                          </div>
                        ) : null}
                      </div>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OvernightDesertSafari