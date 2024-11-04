import React, { useState, useEffect } from 'react'
import Crousel from '../Crousel/Crousel';
import Expandable from '../Accordion/Accordion';
import Cart from "../Cart/Cart"
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { fetchCategories } from '../../Utils/function';


const Home = () => {
  const [categoires, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await fetchCategories();
      const filteredCategories = res.filter(category => category.show_on_homepage === true);
      setCategories(filteredCategories);
    } catch (error) {
      console.error("Error fetching categories: ", error);
      setCategories([]); 
    }
  };


  return (
    <>
      <Crousel />
      {categoires?.map((obj, i) => {
        return (
          <HomeSectionCard
            data={obj}
            key={i}
          />
        )
      })}

      <Expandable />
      <Cart />
    </>
  )
}

export default Home