import React from 'react'
import "./dubaitour.css"
// import data from "../../Json/Tours.json"
import { FaPersonWalkingLuggage } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import data  from "../../Json/data"

const DubaiTours = () => {
  const navigate = useNavigate()

  const handleClick = (obj = {}) => {
    navigate(`/details/${obj?.id}`, { state: obj })
  }

  
  const filteredTours = data.filter(tour => tour.category.includes("Dubai Sightseeing Tours"));
  const limitedTours = filteredTours.slice(0, 3);

  return (
    <div className='tour-parent'>
      <div className="container">
        <div className='faqs-parent dubai-head'>
          Book and Go  <span className='faqs'> _____ </span><FaPersonWalkingLuggage className='personLuagage' />
        </div>
        <h2 className='act-sub-head dubai-head'>Dubai Sightseeing Tours</h2>
        <div className="row">
                    {limitedTours?.map((item, index) => (
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
        <div className="view-more2">
          <button><Link to="/sightseeing" className="viewMore">View More</Link></button>
        </div>
      </div>
    </div>
  )
}

export default DubaiTours
