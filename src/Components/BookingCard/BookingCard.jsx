import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineClose } from 'react-icons/ai';
import './bookingcard.css';
import { Col, Row } from 'react-bootstrap';
import { Form, Input, Typography, Button } from 'antd';

const BookingCard = () => {
    const { Title, Paragraph } = Typography;
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const location = useLocation();
    const product = location.state?.product;
    const bookingDetails = location.state?.bookingDetails;

    const [bookings, setBookings] = useState([
        {
            _id: product?._id,
            adults: bookingDetails?.adults || 1,
            children: bookingDetails?.children || 0,
            infants: bookingDetails?.infants || 0
        }
    ]);

    const [packageQuantity, setPackageQuantity] = useState(1); 

    const adultPrice = product?.price || 0;
    const childPrice = product?.price * 0.7 || 0;

    // Calculate subtotal for one package
    const calculateSubtotalForOnePackage = (booking) =>
        booking.adults * adultPrice + booking.children * childPrice;

    // Calculate total for all packages
    const totalAmount = packageQuantity * bookings.reduce((acc, booking) => acc + calculateSubtotalForOnePackage(booking), 0);

    const handleCheckout = async () => {
        try {
            const orderInfo = await form.validateFields();
            
            const orderId = uuidv4();
            const checkoutData = bookings.map((booking) => ({
                packageId: booking._id,
                tourName: product?.image_text,
                date: bookingDetails?.tourDate || "Not selected",
                adults: booking.adults,
                children: booking.children,
                infants: booking.infants,
                status :  "Pending",
                subtotal: calculateSubtotalForOnePackage(booking) * packageQuantity,
                createdAt: new Date().toISOString(),
            }));
            
            
            const subtotalAmount = bookings.reduce((acc, booking) => acc + calculateSubtotalForOnePackage(booking), 0);
            const totalAmount = packageQuantity * subtotalAmount;

        const orderDetails = {
            orderId,
            bookings: checkoutData,
            subtotalAmount: subtotalAmount.toFixed(2), 
            totalAmount: totalAmount.toFixed(2), 
            orderInfo,
            };
            
            console.log("Order Details:", orderDetails); 
            
            navigate('/order-info', { state: { orderDetails } });
        } catch (error) {
            console.error("Validation Failed:", error);
        }
    };
    
    

    return (
        <div className="booking-card-wrapper" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
            <Row gutter={20}>
                <Col className="gutter-row" span={12}>
                    <div className="booking-card">
                        <h1 className='booking-summary'>Cart</h1>

                        <table className="booking-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Package Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => (
                                    <tr key={booking._id}>
                                        <td>
                                            <AiOutlineClose
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => handleRemoveBooking(index)}
                                            />
                                        </td>
                                        <td>
                                            <img
                                                src={product?.image_url || '/default-image.jpg'}
                                                alt="Product"
                                                className="product-image"
                                            />
                                        </td>
                                        <td className='product-data'>
                                            <div><strong>{product?.image_text}</strong></div>
                                            {bookingDetails?.tourDate ? <div><strong>Tour Date:</strong> {bookingDetails?.tourDate || "Not selected"}</div> : null}
                                            <div><strong>Adults:</strong> {booking.adults}</div>
                                            <div><strong>Children:</strong> {booking.children}</div>
                                            <div><strong>Infants:</strong> {booking.infants}</div>
                                        </td>
                                        <td>AED {adultPrice.toFixed(2)}</td>
                                        <td>
                                            <div className="quantity-control">
                                                <button onClick={() => setPackageQuantity(Math.max(packageQuantity - 1, 1))}>-</button>
                                                <input type="number" value={packageQuantity} readOnly />
                                                <button onClick={() => setPackageQuantity(packageQuantity + 1)}>+</button>
                                            </div>
                                        </td>
                                        <td>AED {(calculateSubtotalForOnePackage(booking) * packageQuantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Subtotal and Total Amount Section */}
                        <div className="total-summary">
                            <h2>Cart Total</h2>
                            <div className="total-details">
                                <div className="total-item">
                                    <span><strong>Subtotal:</strong></span>
                                    <span>AED {bookings.reduce((acc, booking) => acc + calculateSubtotalForOnePackage(booking), 0).toFixed(2)}</span>
                                </div>
                                <div className="total-item">
                                    <span><strong>Total Amount:</strong></span>
                                    <span>AED {totalAmount.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>  

                        <Button  id='Proceed-to-Payment' onClick={handleCheckout}>Proceed to Payment</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default BookingCard;
