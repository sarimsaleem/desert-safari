import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Crousel from '../Crousel/Crousel';
import Expandable from '../Accordion/Accordion';
import Cart from "../Cart/Cart";
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { fetchCategories } from '../../Utils/function';
import "./home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    // Remove the delay if unnecessary
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="home-container" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Crousel />
      <div className="content-container">
        {loading ? (
          <div className="spinner-container">
            <Spin size="large" className="custom-spinner" />
          </div>
        ) : (
          categories.map((obj, index) => (
            <HomeSectionCard
              data={obj}
              key={obj._id || index}
              isFirstCategory={index === 0}
            />
          ))
        )}
      </div>
      <Expandable />
      <Cart />
    </div>
  );
};

export default Home;
