import React, {useState,useEffect} from 'react'
import Crousel from '../Crousel/Crousel';
import Expandable from '../Accordion/Accordion';
import Cart from "../Cart/Cart"
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import DubaiTours from '../DubaiTours/DubaiTours';
import ComboTours from '../ComboTours/ComboTours';
import Cruise from '../CRUISE';
import  {fetchCategories} from '../../DATA/function'; 
const Home = () => {

  const [categoires, setCategoires] = useState([]);
console.log('categoires', categoires)
  useEffect(() => {
    getCategoire();
  }, []);

  const getCategoire = () => {
    fetchCategories()
      .then(res => {
        console.log('getCategoire',res)
        setCategoires(res)
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setCategoires([])
      })
  };

  return (
    <>
    <Crousel/> 
    {/* <AbuDhabiTour/> */}
    {categoires?.map((obj, i) => {
      return (
        <HomeSectionCard
          data={obj}
          key={i}
        />
      )
    })}
    
    <Expandable/>
    <Cart/>

    {/* <Icons/> */}
    </>
  )
}

export default Home