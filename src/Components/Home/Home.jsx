import React from 'react'
import Crousel from '../Crousel/Crousel';
import Expandable from '../Accordion/Accordion';
import Cart from "../Cart/Cart"
import ActivitiesCard from '../Activities/ActivitiesCard';

const Home = () => {
  return (
    <>
    <Crousel/> 
    <ActivitiesCard/>
    <Expandable/>
    <Cart/>

    {/* <Icons/> */}
    </>
  )
}

export default Home