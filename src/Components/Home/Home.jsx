import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Crousel from '../Crousel/Crousel';
import Expandable from '../Accordion/Accordion';
import Cart from "../Cart/Cart";
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { fetchCategories } from '../../Utils/function';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getCategories();
  }, []);
 
  const getCategories = async () => {
    setLoading(true); 

    try {
      const res = await fetchCategories();
      const filteredCategories = res.filter(category => category.show_on_homepage === true);

      if (filteredCategories.length > 1) {
        const reorderedCategories = [filteredCategories[filteredCategories.length - 1], ...filteredCategories.slice(0, -1)];
        setCategories(reorderedCategories);
      } else {
        setCategories(filteredCategories);
      }
    } catch (error) {
      console.error("Error fetching categories: ", error);
      setCategories([]);
    }
    setTimeout(() => setLoading(false), 2000); 
  };

  return (
    <>
      <Crousel />

      {loading ? (
        <div className="spinner-container" style={{ textAlign: 'center', padding: '20px' }}>
          <Spin size="large" />
        </div>
      ) : (
        categories?.map((obj, index) => (
          <HomeSectionCard
            data={obj}
            key={obj._id || index} // Use a unique key if available
            isFirstCategory={index === 0} // Pass true only for the first category
          />
        ))
      )}

      <Expandable />
      <Cart />
    </>
  );
}

export default Home;
