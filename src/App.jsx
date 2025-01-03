import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Navbar/Navbar';
import SubFooter from './Components/SubFooter/SubFooter';
import Footer from './Components/Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Packages from './Packages/Packages';
import Package from './Packages/Package/Package'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingCard from './Components/BookingCard/BookingCard';
import OrderInfo from './Components/OrderInfo/OrderInfo';
import Blog from './Blog/Blog';
import Readmore from './Blog/ReadMore/Readmore';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages/:categoryId" element={<Packages />} />
          <Route path="/packages/:categoryId/:productId" element={<Package />} />
          <Route path="/cart" element={<BookingCard />} />
          <Route path="/order-info" element={<OrderInfo />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/readmore" element={<Readmore />} />
        </Routes>
        <SubFooter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
