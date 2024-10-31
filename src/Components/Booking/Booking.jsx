import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./booking.css";
import { Input, Typography } from 'antd';

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
      return;
    }
    if (adults < 1) {
      setError("At least one adult must be included.");
      return;
    }

    navigate("/card", {
      state: {
        product,
        bookingDetails: { tourDate, adults, children, infants, total }
      }
    });
  };

  const handleAdd = (setFunc, value) => setFunc(value + 1);
  const handleSubtract = (setFunc, value) => setFunc(value > 0 ? value - 1 : 0);

  // Get today's date in the required format for the min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form">
      <div className="container">
        <h3 className="detail-BookNow">Book Tour</h3>
        <div className="subParent1">
          <div className="column-child">
            <h4>Tour Name</h4>
          </div>
          <div className="column-child">
            <h4>Price Per Adult</h4>
          </div>
          <div className="column-child">
            <h4>Price Per Child</h4>
          </div>
        </div>
        <div className="subParent2">
          <div className="column-child2">
            <h4>{product?.image_text}</h4>
          </div>
          <div className="column-child2">
            <h4>AED {product?.price}</h4>
          </div>
          <div className="column-child2">
            <h4>AED {childPrice}</h4>
          </div>
        </div>
        <div className="subParent3">
          <div className="row">
            <div className="col-md-3">
              <Typography className="subParent3-label">Tour Date</Typography>
              <div className="input-btn">
                <Input
                  type="date"
                  className="date"
                  value={tourDate}
                  onChange={(e) => {
                    setTourDate(e.target.value);
                    setError('');
                  }}
                  min={today}
                />
              </div>
            </div>
            <div className="col-md-3">
              <Typography className="subParent3-label">Adult</Typography>
              <div className="input-btn">
                <button onClick={() => handleSubtract(setAdults, adults)}>-</button>
                <Input type="number" value={adults} readOnly />
                <button onClick={() => handleAdd(setAdults, adults)}>+</button>
              </div>
            </div>
            <div className="col-md-3">
              <Typography className="subParent3-label">Child (Age 3-10)</Typography>
              <div className="input-btn">
                <button onClick={() => handleSubtract(setChildren, children)}>-</button>
                <Input type="number" value={children} readOnly />
                <button onClick={() => handleAdd(setChildren, children)}>+</button>
              </div>
            </div>
            <div className="col-md-3">
              <Typography className="subParent3-label">Infant (Age 0-3)</Typography>
              <div className="input-btn">
                <button onClick={() => handleSubtract(setInfants, infants)}>-</button>
                <Input type="number" value={infants} readOnly />
                <button onClick={() => handleAdd(setInfants, infants)}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="subParent4">
          <h4>SUMMARY</h4>
          <div className="subParent4-main-heading">
            <h5>Subtotal</h5>
            <h5>AED {subtotal.toFixed(2)}</h5>
          </div>
          <div className="subParent4-main-heading">
            <h5>Total</h5>
            <h5>AED {total.toFixed(2)}</h5>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="book-parent">
          <button
            className="booknow-booking"
            onClick={handleBooking}
            disabled={!tourDate || adults < 1}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
