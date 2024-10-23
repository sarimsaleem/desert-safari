import React, { useState } from 'react';

const Booking = ({ product }) => {

  const [tourDate, setTourDate] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const adultPrice = product?.price || 0;
  const childPrice = product?.price * 0.9 || 0; 

  const handleAdd = (setFunc, value) => setFunc(value + 1);
  const handleSubtract = (setFunc, value) => setFunc(value > 0 ? value - 1 : 0);

  // Calculate subtotal and total
  const subtotal = adults * adultPrice + children * childPrice;
  const total = subtotal;

  console.log(product,"product")

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
            <h4>AED {childPrice }</h4>
          </div>
        </div>
        <div className="subParent3">
          <div className="row">
            <div className="col-md-3">
              <label className="subParent3-label">Tour Date</label>
              <div className="input-btn">
                <input
                  type="date"
                  className="date"
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <label className="subParent3-label">Adult</label>
              <div className="input-btn">
                <button onClick={() => handleSubtract(setAdults, adults)}>-</button>
                <input type="number" value={adults} readOnly />
                <button onClick={() => handleAdd(setAdults, adults)}>+</button>
              </div>
            </div>
            <div className="col-md-3">
              <label className="subParent3-label">Child (Age 3-10)</label>
              <div className="input-btn">
                <button onClick={() => handleSubtract(setChildren, children)}>-</button>
                <input type="number" value={children} readOnly />
                <button onClick={() => handleAdd(setChildren, children)}>+</button>
              </div>
            </div>
            <div className="col-md-3">
              <label className="subParent3-label">Infant (Age 0-3)</label>
              <div className="input-btn">
                <button onClick={() => handleSubtract(setInfants, infants)}>-</button>
                <input type="number" value={infants} readOnly />
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
      </div>
    </div>
  );
};

export default Booking;
