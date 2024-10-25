import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import "./package.css"
import { fetchProduct } from '../../Utils/function';
import Booking from '../../Components/Booking/Booking';

const Package = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (params?.productId) {
      loadProduct(params.productId);
    }
  }, [params]);

  const loadProduct = (productId) => {
    fetchProduct(productId)
      .then(res => {
        setProduct(res);
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setProduct({});
      });
  };

  return (
    <div className='detail'>
      <div className="image-detail-container">
        {product?.banner_image_url && <img src={product.banner_image_url} alt="" />}
        <div className="image-text-container">
          {product?.image_text && <h6 className='image-detail-text fs-1'>{product.image_text}</h6>}
          {product?.price && (
            <div className="price-container">
              <h6 className="image-from">From</h6>
              <h6 className="image-detail-text">
                <sup className="currency2">AED</sup>
                {product.price}
              </h6>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        {product?.special_note && (
          <div className="special-note mb-4">
            <p className='special-note-text'>
              <span className='special-note-span'>Special Note:</span> {product.special_note}
            </p>
          </div>
        )}
        {product?.description && <div className="description">{product.description}</div>}

        {Array.isArray(product?.content) && product.content.length > 0 ? (
          product.content.map((obj, index) => (
            <div key={index}>
              <h2 className='detail-head'>{obj?.title}</h2>
              <div className="row">
                {Array.isArray(obj.data) && obj.data.map((chilObj, childIndex) => (
                  <div key={childIndex} className="col-6">
                    <li className="detail-li d-flex align-items-center">
                      {!obj?.hideItemIcon && <FaCheck className='checkIcon' />}
                      <div>
                        <p style={{ margin: 0 }}>{chilObj.item} {chilObj.itemDescription && <span>: {chilObj.itemDescription}</span>}</p>
                        {chilObj.description && <p style={{ margin: 0 }}>{chilObj.description}</p>}
                        {obj?.book && <div className="detail-btn"><button>{obj.book}</button></div>}
                      </div>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No content available.</p>
        )}
      </div>

      <Booking product={product} />
    </div>
  );
}

export default Package;
