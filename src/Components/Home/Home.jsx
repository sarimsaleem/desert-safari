import React from 'react'
import Crousel from '../Crousel/Crousel';
import Expandable from '../Accordion/Accordion';
import Cart from "../Cart/Cart"
import ActivitiesCard from '../Activities/ActivitiesCard';
import DubaiTours from '../DubaiTours/DubaiTours';
import ComboTours from '../ComboTours/ComboTours';

const Home = () => {
  return (
    <>
    <Crousel/> 
    <ActivitiesCard/>
    <DubaiTours/>
    <ComboTours/>
    <Expandable/>
    <Cart/>

    {/* <Icons/> */}
    </>
  )
}

export default Home