import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import "./detail.css"
const DetailPage = () => {
  const location = useLocation();
  const reciveData = location.state;

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

        {reciveData?.content && reciveData?.content?.map((obj, index) => {
          return (
            <div key={index}>
              <h2 className='detail-head'>{obj?.title}</h2>
              <div className="row">
                {obj.data.map((chilObj, childIndex) => (
                  <div key={childIndex} className="col-6">
                    <li className="detail-li d-flex align-items-center">
                      {!obj?.hideItemIcon && <FaCheck style={{ color: 'red', marginRight: '8px' }} />}
                      <div>
                        <p style={{ margin: 0 }}>{chilObj.item}  {chilObj.itemDescription && <span>: {chilObj.itemDescription}</span>}</p>
                        {chilObj.description ? <p style={{ margin: 0 }} >{chilObj.description}</p> : null}
                        {obj?.book ? <div className="detail-btn"><button>{obj.book}</button></div> : null}
                      </div>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default DetailPage;
