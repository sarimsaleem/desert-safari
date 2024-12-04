import React, { useEffect, useState } from 'react';
import "./packages.css";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import header from "../assets/header.jpg";
import { fetchProducts, fetchCategory } from '../Utils/function';
import { convertToSlug } from '../Utils/helper';
import { Spin } from 'antd';

const Packages = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const { state } = useLocation();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let categoryId = state?.category?._id || params?.categoryId;
    if (categoryId) {
      loadCategory(categoryId);
      loadProducts(categoryId);
    }
  }, [params?.categoryId, state?.category]);

  const loadCategory = async (id) => {
    setLoading(true);
    fetchCategory(id)
      .then(res => {
        setCategory(res);
      })
      .catch(error => {
        setCategory(null);
        console.error("Error fetching category: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadProducts = async (categoryId) => {
    setLoading(true);
    fetchProducts({ categoryId })
      .then(res => {
        setProducts(res);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClick = (categoryData, packageData = {}) => {
    navigate(`/packages/${convertToSlug(categoryData?._id)}/${convertToSlug(packageData?._id)}`, {
      state: {
        category: categoryData,
        productId: packageData?._id
      }
    });
  };

  return (
    <div className="cruiseDinner">
      {loading && (
        <div className="loading-overlay">
          <Spin size="large" />
        </div>
      )}
      <div className="image-detail-container">
        <img src={header} alt="" />
        <div className="image-text-container">
          <h6 className='image-detail-text image-detail-text-head '>{category?.category_name || '-'}</h6>
        </div>
      </div>
      <div className='container'>
        <div className="packages-parent">
          <div className="row">
            {products.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 act-card">
                  <div className="image-container">
                    {item?.image_url && <img src={item.image_url} className="card-img-top" alt={item.event_name} />}
                    {item?.image_text && <h6 className="image-text">{item.image_text}</h6>}
                  </div>
                  <div className="card-body">
                    <div className='card-sub-body'>
                      <div className="title-container">
                        {item?.event_name && <h3 className="card-title">{item.event_name} &nbsp;</h3>}
                        {item?.most_popular && <span className='most-popular'>Most Popular </span>}
                      </div>
                      {item?.price && <h3 className="card-text"><sup className='currency'>AED</sup>{item.price}</h3>}
                    </div>
                    <button className="btn act-btn" onClick={() => handleClick(category, item)} >Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
