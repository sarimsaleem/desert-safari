import React from 'react';
import './orderinfo.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Form, Input, Typography, message, Radio } from 'antd';
import { useLocation } from 'react-router-dom';
import { addOrder } from '../../Utils/OrderFunction';
import emailjs from 'emailjs-com';

const OrderInfo = () => {
    const { Title, Paragraph } = Typography;
    const [form] = Form.useForm();
    const location = useLocation();
    const orderDetails = location.state?.orderDetails;

    const onFinish = async (orderInfo) => {
        const combinedDetails = {
            ...orderDetails,
            orderInfo,
            status: orderDetails?.status || 'Pending', 
            date: orderDetails?.bookings[0]?.date || 'Not selected',
            adults: orderDetails?.bookings[0]?.adults || 0,
            children: orderDetails?.bookings[0]?.children || 0,
            infants: orderDetails?.bookings[0]?.infants || 0,
            subtotalAmount: orderDetails?.subtotalAmount || '0.00',
            totalAmount: orderDetails?.totalAmount || '0.00',
            createdAt: orderDetails?.createdAt || new Date().toISOString(),
        };
        
        const customOrderId = combinedDetails.orderId;

        try {
            const docId = await addOrder(combinedDetails, customOrderId);
            message.success('Order details saved successfully!');
            form.resetFields();

            emailjs.send(
                'service_wazal4q',
                'template_1ctyl1n',
                {
                    to_name: orderInfo.fullName,
                    to_email: orderInfo.email,
                    orderId: customOrderId,
                    status: combinedDetails.status,
                    date: combinedDetails.date,
                    adults: combinedDetails.adults,
                    children: combinedDetails.children,
                    infants: combinedDetails.infants,
                    subtotalAmount: combinedDetails.subtotalAmount,
                    totalAmount: combinedDetails.totalAmount,
                    createdAt: combinedDetails.createdAt,
                    paymentMethod: orderInfo.paymentMethod,
                },
                'XwTfcKiagzY0CXetf'
            ).then((response) => {
                message.success('Email sent to customer!');
            }).catch((error) => {
                message.error('Failed to send email.');
                console.error('Email error:', error);
            });

        } catch (error) {
            message.error('Failed to save order details.');
            console.error('Order saving error:', error);
        }
    };

    return (
        <>
        <div className="page-header" >
                <div className="container">
                    <div className="row">
                        <div className='package-text'>
                            <h6 className='page-heaer-text image-detail-text image-detail-text-head  fs-1'>Checkout</h6>
                        </div>
                    </div>
                </div>
            </div>
        <Container>
            <Row>
                <Col className="gutter-row" span={12}>
                    <div className="second-row-biling-form">
                        <Title className='head-biling' style={{ color: "var(--category-color)" }} level={2}>Billing details
                        </Title>
                        <Paragraph className='para-biling'>Please provide your billing details below. If you have any additional information, you may add it here as well.</Paragraph>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Typography className="typo-billing">Nationality</Typography>
                                    <Form.Item
                                        name="nationality"
                                        rules={[{ required: true, message: 'Please enter your nationality' }]}
                                    >
                                        <Input placeholder="Enter nationality" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Typography className="typo-billing">Full Name</Typography>
                                    <Form.Item
                                        name="fullName"
                                        rules={[
                                            { required: true, message: 'Please enter your full name' },
                                            { min: 3, message: 'Full name must be at least 3 characters' },
                                        ]}
                                    >
                                        <Input placeholder="Enter full name" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Typography className="typo-billing">Pickup Location</Typography>
                                    <Form.Item
                                        name="pickupLocation"
                                        rules={[{ required: true, message: 'Please enter your pickup location' }]}
                                    >
                                        <Input placeholder="Enter pickup location" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Typography className="typo-billing">Room No</Typography>
                                    <Form.Item
                                        name="roomNo"
                                    >
                                        <Input placeholder="Enter room number" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Typography className="typo-billing">Email Address</Typography>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please enter your email address' },
                                            { type: 'email', message: 'Please enter a valid email address' },
                                        ]}
                                    >
                                        <Input placeholder="Enter email address" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Typography className="typo-billing">Phone Number</Typography>
                                    <Form.Item
                                        name="phoneNo"
                                        rules={[
                                            { required: true, message: 'Please enter your phone number' },
                                            { pattern: /^[0-9]{10,15}$/, message: 'Phone number should be 10 to 15 digits' },
                                        ]}
                                    >
                                        <Input placeholder="Enter phone number" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Typography className="typo-billing">Additional Information.(Optional)</Typography>
                                    <Form.Item
                                        name="additionalInfo"
                                    >
                                        <Input.TextArea rows={4} placeholder="Add any additional information here" />
                                    </Form.Item>
                                </Col>
                            </Row> 

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Typography className="typo-billing">Payment Method</Typography>
                                    <Form.Item
                                        name="paymentMethod"
                                        rules={[{ required: true, message: 'Please select a payment method' }]}
                                    >
                                        <Radio.Group>
                                            <Radio value="pay-At-Driver" style={{ color: "var(--text-color)" }}>Pay at the Driver</Radio>
                                            {/* <Radio value="pay-By-Card" style={{ color: "var(--text-color)" }}>Pay by Card</Radio>  */}
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Form.Item>
                                        <Button type="submit" className='checkout-btn'>Submit</Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default OrderInfo;