import React from 'react'
import "./sightseeing.css"
import data from "../JsonData/SightSeeing.json"
import { useNavigate } from 'react-router-dom'
import header from "../../assets/header.jpg"

const SightSeeing = () => {
  const navigate = useNavigate()
  const handleClick = (obj = {}) => {
    navigate("/details", { state: obj })
  }
  return (
    <div className="sightseeing">
      <div className="image-detail-container">
        <img src={header} alt="" />
        <div className="image-text-container">
          <h6 className='image-detail-text fs-1'>Dubai Sightseeing Tours Package</h6>
        </div>
      </div>
    <div className='container'>
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
                {item?.book ? <button className=" act-btn"><a href="">{item.book}</a></button> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default SightSeeing