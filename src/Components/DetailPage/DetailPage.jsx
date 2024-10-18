import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import "./detail.css"

const DetailPage = ({ data }) => {
  const location = useLocation();
  const reciveData = location.state;

  // const {id} = useParams()

  // const item = data.find((item) => item.id === id)

  return (
    <div className='detail'>
      <div className="image-detail-container">
        {reciveData?.banner_image_url ? <img src={reciveData.banner_image_url} alt="" /> : null}
        <div className="image-text-container">
          {reciveData?.image_text ? <h6 className='image-detail-text fs-1'>{reciveData.image_text}</h6> : null}
          {reciveData?.price ? (
            <div className="price-container">
              <h6 className="image-from">From</h6>
              <h6 className="image-detail-text">
                <sup className="currency2">AED</sup>
                {reciveData.price}
              </h6>
            </div>
          ) : null}

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
                      {!obj?.hideItemIcon && <FaCheck className='checkIcon' />}
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

      <div className="form ">
        <div className="container">
          <h3 className='detail-BookNow'>Book Tour</h3>
          <div className="subParent1">
            <div className="column-child">
              <h4>Tour Name</h4>
            </div>
            <div className="column-child">
              <h4>Price Per Adult	</h4>
            </div>
            <div className="column-child">
              <h4>Price Per Child</h4>
            </div>
          </div>
          <div className="subParent2">
            <div className="column-child2">
              <h4>{reciveData?.image_text}</h4>
            </div>
            <div className="column-child2">
              <h4> {reciveData.price}</h4>
            </div>
            <div className="column-child2">
              <h4> {reciveData.price}</h4>
            </div>
          </div>
          <div className="subParent3">
            <div className="row">
              <div className="col-md-3">
                <label className='subParent3-label'>Tour Date</label>
                <div className="input-btn" >
                  <input type="date" className='date' />
                </div>
              </div>
              <div className="col-md-3">
                <label className='subParent3-label'>Adult</label>
                <div className="input-btn">
                  <button>-</button>
                  <input type="number"/>
                  <button>+</button>
                </div>
              </div>
              <div className="col-md-3">
                <label className='subParent3-label'>Child (Age 3-10)</label>
                <div className="input-btn">
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </div>
              </div>
              <div className="col-md-3">
                <label className='subParent3-label'>Infant (Age 0-3)</label>
                <div className="input-btn">
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="subParent4">
              <h4>SUMMARY</h4>
            <div className="subParent4-main-heading">
              <h5>Subtotal</h5>
              <h5>AED</h5>
            </div>
            <div className="subParent4-main-heading">
              <h5>Total</h5>
              <h5>AED</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
