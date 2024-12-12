import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { Spin } from 'antd';
import "./package.css";
import { fetchProduct } from '../../Utils/function';
import Booking from '../../Components/Booking/Booking';

const Package = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [showBooking, setShowBooking] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (params?.productId) {
      loadProduct(params.productId);
    }
  }, [params]);

  const loadProduct = (productId) => {
    setLoading(true);
    fetchProduct(productId)
      .then(res => {
        setProduct(res);
      })
      .catch(error => {
        console.error("Error fetching product: ", error);
        setProduct({});
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleBookNowClick = () => {
    setShowBooking(prevShowBooking => !prevShowBooking);
  };

  if (loading) {
    return (
      <div className="loading-indicator-centered">
        <Spin size="large" className="custom-spinner" />
      </div>
    );
  }

  return (
    <div className="main">
      <div className="page-header" style={{ backgroundImage: `url(${product.banner_image_url})`, }}>
        <div className="container">
          <div className="row">
            <div className='detail'>
              {product?.image_text && <h6 className='page-heaer-text image-detail-text image-detail-text-head  fs-1'>{product.image_text}</h6>}
              {product?.price && (
                <div className="price-container">
                  <h6 className="image-from">From</h6>
                  <h6 className="page-heaer-text">
                    <sup className="currency2">AED</sup>
                    {product.price}
                  </h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="package-parent">
          {product?.special_note && (
            <div className="special-note mb-4">
              <p className="special-note-text">
                <span className="special-note-span">Special Note:</span> {product.special_note}
              </p>
            </div>
          )}
          {product?.description && <div className="description">{product.description}</div>}

          {Array.isArray(product?.content) && product.content.length > 0 ? (
            product.content.map((obj, index) => (
              <div key={index}>
                <h2 className="detail-head">{obj?.title}</h2>
                <div className="row">
                  {Array.isArray(obj.data) && obj.data.map((chilObj, childIndex) => (
                    <React.Fragment key={childIndex}>
                      <div className="col-6">
                        <li className="detail-li">
                          {!obj?.hideItemIcon && <FaCheck className="checkIcon" />}
                          <div>
                            <p style={{ margin: 0 }}>
                              {chilObj.item} {chilObj.itemDescription && <span>: {chilObj.itemDescription}</span>}
                            </p>
                          </div>
                        </li>
                      </div>
                    </React.Fragment>
                  ))}
                  {obj.description && (
                    <div className="col-12">
                      {obj.description.split(/\r?\n/).map((line, index) => (
                        <p key={index} className="description" style={{ margin: 0 }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  )}

                </div>

                {obj?.book && (
                  <div className="detail-btn">
                    <button>{obj.book}</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </div>

      {/* Centered Book Now button */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="book-now-btn" onClick={handleBookNowClick}>Book Now</button>
      </div>

      <div className={`booking-container ${showBooking ? 'show' : ''}`}>
        {showBooking && <Booking product={product} />}
      </div>
    </div>
  );
}

export default Package;
