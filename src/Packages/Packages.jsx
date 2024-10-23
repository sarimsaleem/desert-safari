
import React, {useEffect, useState} from 'react'
import "./packages.css"
import { useNavigate, useParams } from 'react-router-dom'
import header from "../assets/header.jpg"
import {fetchProducts, fetchCategory} from '../Utils/function';
import {convertToSlug} from '../Utils/helper';

const Packages = (props) => {

  const navigate = useNavigate()
  const params = useParams();
  console.log(params)

  // const query = new URLSearchParams(props.location.search);

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(params?.categoryId){
      loadCategory(params?.categoryId)
      loadProducts(params?.categoryId);
    }
      
    }, [params?.categoryId]);
  
    const loadCategory = async (id) => {
      fetchCategory(id)
        .then(res => {
          setCategory(res)
          console.log('loadCategory', res)
        })
        .catch(error => {
          setCategory(null)
          console.error("Error fetching products: ", error);
          
        })
    };

    const loadProducts = async (categoryId) => {
      fetchProducts({categoryId})
        .then(res => {
          setProducts(res)
          console.log('loadProduct', res)
        })
        .catch(error => {
          console.error("Error fetching products:", error);
          setProducts([])
        })
    };


  const handleClick = (categoryData, packageData = {}) => {
    navigate(`/packages/${convertToSlug(categoryData?._id)}/${convertToSlug(packageData?._id)}`, { state: {
      category: categoryData,
        productId: packageData 
        // yeh line change ki hai 
        // productId: packageData?._id 
    } });
  };

  return (
    <div className="cruiseDinner">
      <div className="image-detail-container">
        <img src={header} alt="" />
        <div className="image-text-container">
          <h6 className='image-detail-text fs-1'>{category?.category_name || '-'}</h6>
        </div>
      </div>
      <div className='container'>
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
                  <button className="btn act-btn" onClick={() => handleClick(category, item)} >Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Packages