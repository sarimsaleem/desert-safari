import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import "./detail.css"
const DetailPage = () => {
  const location = useLocation();
  const reciveData = location.state;
  // bookingData
  return (
    <div className='detail'>
      <div className="image-detail-container">
        <img src={reciveData.banner_image_url} alt="" />
        <div className="image-text-container">
          <h6 className='image-detail-text fs-1'>{reciveData.image_text}</h6>
          <h6 className='image-from'>From</h6>
          <h6 className='image-detail-text'>
            <sup className='currency2'>AED</sup>{reciveData.price}
          </h6>
        </div>
      </div>
      <div className="container">
        {reciveData?.special_note ? <div className="special-note mb-4">
          <p className='special-note-text'><span className='special-note-span'>Special Note:</span> {reciveData.special_note}</p>
        </div> : null}
        {reciveData?.description ? <div className="description">{reciveData.description}</div> : null}

        {reciveData?.package_inclusions ? (
          <>
            <h2 className='detail-head'>Package Inclusions</h2>
            <div className="row">
              {reciveData.package_inclusions.map((item, index) => (
                <div key={index} className="col-6">
                  <li className="detail-li d-flex align-items-center">
                    <FaCheck style={{ color: 'red', marginRight: '8px' }} />
                    {item.item}
                    {item.description && <span>: {item.description}</span>}
                  </li>
                </div>
              ))}
            </div>
          </>
        ) : null}


       {reciveData?.timings?.dropoff_time && reciveData?.timings?.pickup_time ? (<>
          <h2 className='detail-head'>Timings</h2>
          <div className="row">
            <div className="col-6">
              <li className="detail-li d-flex align-items-center ">
                <FaCheck style={{ color: 'red', marginRight: '8px' }} />
                Pickup Time: {reciveData.timings.pickup_time}
              </li>
            </div>
            <div className="col-6">
              <li className="detail-li d-flex align-items-center ">
                <FaCheck style={{ color: 'red', marginRight: '8px' }} />
                Dropoff Time: {reciveData.timings.dropoff_time}
              </li>
            </div>
          </div>
        </>): null}

        {reciveData?.notes ? (
          <>
            <h2 className='detail-head'>Notes</h2>
            <div className="row">
              {reciveData.notes.map((note, index) => (
                <div key={index} className="col-6">
                  <li className="detail-li d-flex align-items-centerx">
                    <FaCheck style={{ color: 'red', marginRight: '8px' }} />
                    {note.text}
                  </li>
                </div>
              ))}
            </div>
          </>
        ) : null}
        {reciveData?.book ?<div className="detail-btn"><button>{reciveData.book}</button></div> :null}
      </div>
    </div>
  );
}

export default DetailPage;
