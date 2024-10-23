import React, { useEffect, useState } from 'react';
import "./homeSectionCard.css";
import { FaPersonWalkingLuggage } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { db } from "../../Firebase/FirebaseConfig"; // Ensure your Firebase config is imported
import { collection, query, where, getDocs } from "firebase/firestore";
import {fetchProducts} from '../../Utils/function';
import {convertToSlug} from '../../Utils/helper';
import { BiCategory } from 'react-icons/bi';


const HomeSectionCard = ({data}) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleClick = (category, item = {}) => {
    navigate(`/packages/${convertToSlug(category?.category_name)}/${convertToSlug(item?._id)}`, { state: {
      category: category,
        productId: item?._id 
    } });
  };

  const viewMore = (obj = {}) => {
    navigate(`/packages/${obj?._id}`, { state: {
        category: obj
    } });
  };

  useEffect(() => {
  if(data?._id){
    // console.log(data?._id)
    loadProducts(data?._id);
  }
    
  }, [data]);

  const loadProducts = async (categoryId) => {
    fetchProducts({categoryId})
      .then(res => {
        // console.log('getCategoire',res)
        setProducts(res)
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setProducts([])
      })
  };

  // console.log('data',data)

  return products?.length ? (
    <div className={`activities-parent card-section ${data?.image_url ? 'light' : "dark"}`} style={data?.image_url ? {backgroundImage: `url(${data?.image_url})`} : {}}>
      <div className="container">
        {/* <h1 className='act-main-heading'>Dubai Desert Safari – Most Popular Desert Safari Company in Dubai</h1> */}
        <div className='faqs-parent'>
          Book and Go  <span className='faqs'> _____ </span><FaPersonWalkingLuggage className='personLuagage' />
        </div>
        <h2 className='act-sub-head'>{data?.category_name}</h2>
        <div className="row">
          {products?.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 act-card">
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
                   <button className="btn act-btn" onClick={() => handleClick(data, item)} >Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more">
          <button onClick={() => viewMore(data)}><Link className="viewmore2">View More</Link></button>
        </div>
      </div>
    </div>
  ) : null;
};

export default HomeSectionCard;
