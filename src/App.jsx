// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Navbar/Navbar';
import SubFooter from './Components/SubFooter/SubFooter';
import Footer from './Components/Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardNavigate from './Components/DetailPage/DetailPage';
import AbuDhabiTour from './AllPackages/AbuDhabiTour/AbuDhabiTour';
import ComboTours from "./AllPackages/ComboTours/ComboTours"
import CruiseDinner from './AllPackages/CruiseDinner/CruiseDinner';
import DubaiCityTour from "./AllPackages/DubaiCityTour/DubaiCityTour"
import QuadBike from "./AllPackages/QuadBike/QuadBike"
import SightSeeing from "./AllPackages/SightSeeing/SightSeeing"
import EveningDesertSafari from './DesertSafariDubai/Evening/EveningDesertSafari';
import OvernightDesertSafari from './DesertSafariDubai/Overnight/OvernightDesertSafari';
import LuxuryDesertSafari from './DesertSafariDubai/Luxury/LuxuryDesertSafari';
import MorningDeertSafari from './DesertSafariDubai/Morning/MorningDeertSafari';
import PrivateDesertSafari from './DesertSafariDubai/Private/PrivateDesertSafari';
import QuadbikeDesertSafari from './DesertSafariDubai/QuadBike/QuadbikeDesertSafari';
import VipDesertSafari from './DesertSafariDubai/VIP/VipDesertSafari';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<CardNavigate />} />
          <Route path="/combotours" element={<ComboTours/>} />
          <Route path="/cruisedinner" element={<CruiseDinner/>} />
          <Route path="/dubaicitytour" element={<DubaiCityTour />} />
          <Route path="/abudhabicitytour" element={<AbuDhabiTour/>} />
          <Route path="/quadbike" element={<QuadBike/>} />
          <Route path="/sightseeing" element={<SightSeeing/>} />
          <Route path="/evening-desert-safari" element={<EveningDesertSafari/>} /> 
          <Route path="/overnight-desert-safari" element={<OvernightDesertSafari/>} /> 
          <Route path="/luxury-desert-safari" element={<LuxuryDesertSafari/>} /> 
          <Route path="/morning-desert-safari" element={<MorningDeertSafari/>} /> 
          <Route path="/private-desert-safari" element={<PrivateDesertSafari/>} /> 
          <Route path="/quadbike-desert-safari" element={<QuadbikeDesertSafari/>} /> 
          <Route path="/vip-desert-safari" element={<VipDesertSafari/>} /> 
        </Routes>
        <SubFooter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
