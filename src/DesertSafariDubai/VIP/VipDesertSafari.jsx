import React from 'react'
import desertSafaris from "../../Json/DesertSafariDubai.json";
import { FaCheck } from 'react-icons/fa6';

const VipDesertSafari = () => {
  const eveningSafari = desertSafaris[5];

  return (
    <div className='dubaisafari'>
    <div className="image-detail-container">
      {eveningSafari?.banner_image_url ? <img src={eveningSafari.banner_image_url} alt="" /> : null}
      <div className="image-text-container">
        {eveningSafari?.banner_text ? <h6 className='image-detail-text fs-1'>{eveningSafari.banner_text}</h6> : null}
        {eveningSafari?.price ? (
          <div className="price-container">
            <h6 className="image-from">From</h6>
            <h6 className="image-detail-text">
              <sup className="currency2">AED</sup>
              {eveningSafari.price}
            </h6>
          </div>
        ) : null}
      </div>
    </div>
    <div className="container">
      {eveningSafari?.special_note ? <div className="special-note mb-4">
        <p className='special-note-text'><span className='special-note-span'>Special Note:</span> {eveningSafari.special_note}</p>
      </div> : null}
      {eveningSafari?.description ? <div className="description">{eveningSafari.description}</div> : null}
      <div className="row">
        {eveningSafari?.content.map((section, index) => (
          <div key={index} className="col-12">
            {section?.title ? <h2 className='detail-head'>{section.title}</h2> : null}
            <div className="row">
              {section.data.map((item, idx) => (
                <div key={idx} className="col-6">
                  <li className="detail-li d-flex align-items-center">
                    {!section?.hideItemIcon && <FaCheck style={{ color: 'red', marginRight: '8px' }} />}
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

export default VipDesertSafari