import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import "./package.css"
import { fetchProduct } from '../../Utils/function';
import Booking from '../../Components/Booking/Booking';

const Package = () => {
  // const location = useLocation();
  const params = useParams();
  console.log(params)

  // const location = useLocation();
  // const { product, category } = location.state || {};

  const [product, setProduct] = useState({});


  useEffect(() => {
    if (params?.productId) {
      console.log('productId', params?.productId)
      loadProduct(params?.productId);
    }

  }, [params]);

  const loadProduct = (productId) => {
    fetchProduct(productId)
      .then(res => {
        console.log('loadProduct', res)
        setProduct(res)
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setProduct({})
      })
  };
  console.log(product, "productproduct")

  // const {id} = useParams()

  // const item = data.find((item) => item.id === id)
  return (
    <div className='detail'>
      <div className="image-detail-container">
        {product?.banner_image_url ? <img src={product.banner_image_url} alt="" /> : null}
        <div className="image-text-container">
          {product?.image_text ? <h6 className='image-detail-text fs-1'>{product.image_text}</h6> : null}
          {product?.price ? (
            <div className="price-container">
              <h6 className="image-from">From</h6>
              <h6 className="image-detail-text">
                <sup className="currency2">AED</sup>
                {product?.price}
              </h6>
            </div>
          ) : null}

        </div>
      </div>
      <div className="container">
        {product?.special_note ? <div className="special-note mb-4">
          <p className='special-note-text'><span className='special-note-span'>Special Note:</span> {product.special_note}</p>
        </div> : null}
        {product?.description ? <div className="description">{product.description}</div> : null}

        {product?.content && product?.content?.map((obj, index) => {
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

      <Booking
        product={product}
      />


    </div>
  );
}

export default Package;
