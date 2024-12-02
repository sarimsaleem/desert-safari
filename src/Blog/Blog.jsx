import React, { useState, useEffect } from 'react';
import { Spin } from 'antd'; 
import { fetchProducts } from '../Utils/function'; 
import './Blog.css'; 
import Header from "../assets/header.jpg"
const Blog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const header = '/path/to/your/header/image.jpg'; 
  const category = { category_name: 'Desert Adventures' }; 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsList = await fetchProducts();
        setProducts(productsList);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleClick = (category, item) => {
    console.log('Booking:', category, item);
  };

  return (
    <div className="blog-page">
      <div className="blog-header-container">
        <img src={Header} alt="Header" />
        <div className="blog-header-text-container">
          <h6 className="blog-header-text">{category?.category_name || '-'}</h6>
        </div>
      </div>

      <div className="blog-content-container">
        <div className="blog-packages">
          {loading ? (
            <div className="blog-loading">
              <Spin size="large" />
            </div>
          ) : (
            <div className="blog-cards-row">
              {products.map((item, index) => (
                <div key={index} className="blog-card-wrapper">
                  <div className="blog-card">
                    <div className="blog-image-container">
                      {item?.image_url && <img src={item.image_url} className="blog-card-image" alt={item.event_name} />}
                      {item?.image_text && <h6 className="blog-image-text">{item.image_text}</h6>}
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-details">
                        <div className="blog-card-title-container">
                          {item?.event_name && <h3 className="blog-card-title">{item.event_name}</h3>}
                          {item?.most_popular && <span className="blog-most-popular">Most Popular</span>}
                        </div>
                        {item?.price && <h3 className="blog-card-price"><sup className="blog-currency">AED</sup>{item.price}</h3>}
                      </div>
                      <button className="blog-book-now-btn" onClick={() => handleClick(category, item)}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
