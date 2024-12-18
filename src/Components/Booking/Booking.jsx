import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./booking.css";
import { Button, Col, Input, Row, Typography } from 'antd';

const Booking = ({ product }) => {
  const navigate = useNavigate();
  const [tourDate, setTourDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [error, setError] = useState('');

  const adultPrice = product?.price || 0;
  const childPrice = product?.price * 0.7 || 0;
  const subtotal = adults * adultPrice + children * childPrice;
  const total = subtotal;

  const handleBooking = () => {
    if (!tourDate) {
      setError("Please select a tour date.");
      console.log(error, "error")
      return;
    }
    if (adults < 1) {
      setError("At least one adult must be included.");
      return;
    }

    
    setError("");

    navigate("/cart", {
      state: {
        product,
        bookingDetails: { tourDate, adults, children, infants, total }
      }
    });
  };

  const getButtonText = () => {
    if (!tourDate) return "Select a date";
    if (adults < 1) return "Add at least 1 adult";
    return "Book Now";
  };

  const handleAdd = (setFunc, value) => setFunc(value + 1);
  const handleSubtract = (setFunc, value) => setFunc(value > 0 ? value - 1 : 0);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form">
      <div className="container">
        <h3 className="detail-BookNow">Book Tour</h3>
        <Row gutter={[16, 24]}>
          <Col xs={24} sm={12} md={8}>
            <div className="column-child">
              <h4>Tour Name</h4>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="column-child">
              <h4>Price Per Adult</h4>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="column-child">
              <h4>Price Per Child</h4>
            </div>
          </Col>
        </Row>

        <Row gutter={[16, 24]}>
          <Col xs={24} sm={12} md={8}>
            <div className="column-child2">
              <h4>{product?.image_text}</h4>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="column-child2">
              <h4>AED {product?.price}</h4>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="column-child2">
              <h4>AED {childPrice}</h4>
            </div>
          </Col>
        </Row>

        <Row gutter={[16, 24]}>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Typography className="subParent-label">Tour Date</Typography>
            <div className="input-btn">
              <Input
                type="date"
                className="date"
                value={tourDate}
                onChange={(e) => {
                  setTourDate(e.target.value);
                  setError('');
                }}
                style={{ outline: 'none', boxShadow: 'none' }}
                min={today}
                onKeyDown={(e) => e.preventDefault()}
              />
            </div>
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <Typography className="subParent-label">Adult</Typography>
            <div className="input-btn">
              <button onClick={() => handleSubtract(setAdults, adults)}>-</button>
              <Input type="number" value={adults} readOnly />
              <button onClick={() => handleAdd(setAdults, adults)}>+</button>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Typography className="subParent-label">Child (Age 3-10)</Typography>
            <div className="input-btn">
              <button onClick={() => handleSubtract(setChildren, children)}>-</button>
              <Input type="number" value={children} readOnly />
              <button onClick={() => handleAdd(setChildren, children)}>+</button>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Typography className="subParent-label">Infant (Age 0-3)</Typography>
            <div className="input-btn">
              <button onClick={() => handleSubtract(setInfants, infants)}>-</button>
              <Input type="number" value={infants} readOnly />
              <button onClick={() => handleAdd(setInfants, infants)}>+</button>
            </div>
          </Col>
        </Row>

        <h4 className="summary-heading">SUMMARY</h4>
        <Row gutter={[16, 24]}>
          <Col xs={12} sm={8} md={3}>
            <div className="summary-headings">
              <h5>Subtotal</h5>
              <h5>Total</h5>
            </div>
          </Col>
          <Col xs={12} sm={8} md={5}>
            <div className="summary-headings">
              <h5>AED {subtotal.toFixed(2)}</h5>
              <h5>AED {total.toFixed(2)}</h5>
            </div>
          </Col>
        </Row>
        <div className="book-parent">
          <Button
            id="booknow-booking"
            onClick={handleBooking}
            style={{ textAlign: 'center' }}
          >
            {getButtonText()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
