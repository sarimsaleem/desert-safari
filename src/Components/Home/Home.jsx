import React from 'react'
import Crousel from '../Crousel/Crousel';
import Expandable from '../Accordion/Accordion';
import Cart from "../Cart/Cart"
import ActivitiesCard from '../Activities/ActivitiesCard';
import DubaiTours from '../DubaiTours/DubaiTours';
import ComboTours from '../ComboTours/ComboTours';
import Cruise from '../CRUISE';

const Home = () => {
  return (
    <>
    <Crousel/> 
    <ActivitiesCard/>
    <DubaiTours/>
    <ComboTours/>
    <Cruise/>
    <Expandable/>
    <Cart/>

    {/* <Icons/> */}
    </>
  )
}

export default Home