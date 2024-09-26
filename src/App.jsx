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
        </Routes>
        <SubFooter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
