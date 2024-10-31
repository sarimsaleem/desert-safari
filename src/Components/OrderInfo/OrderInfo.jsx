import React from 'react';
import './orderinfo.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Form, Input, Typography, message } from 'antd';
import { useLocation } from 'react-router-dom';
import { addOrder } from '../../Utils/OrderFunction'; 

const OrderInfo = () => {
    const { Title, Paragraph } = Typography;
    const [form] = Form.useForm();
    const location = useLocation();
    const orderDetails = location.state?.orderDetails;

    const onFinish = async (orderInfo) => {
        const combinedDetails = {
            ...orderDetails,
            orderInfo
        };
    
        const customOrderId = orderDetails.orderId; 
    
        try {
            const docId = await addOrder(combinedDetails, customOrderId);
            message.success('Order details saved successfully!');
            form.resetFields(); 
        } catch (error) {
            message.error('Failed to save order details.');
        }
    };
    

    return (
        <Container>
            <Row>
                <Col className="gutter-row" span={12}>
                    <div className="second-row-biling-form">
                        <Title className='head-biling' style={{ color: "var(--category-color)" }} level={2}>Customer Information</Title>
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
                                    <Typography className="typo-billing">Room No.(Optional)</Typography>
                                    <Form.Item
                                        name="roomNo"
                                        rules={[
                                            { pattern: /^[0-9]+$/, message: 'Room number should be a valid number' },
                                        ]}
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
                                    <Typography className="typo-billing">Additional Information</Typography>
                                    <Form.Item
                                        name="additionalInfo"
                                        rules={[{ max: 300, message: 'Additional information should be a maximum of 300 characters' }]}
                                    >
                                        <Input.TextArea rows={4} placeholder="Add any additional information here" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <Form.Item>
                                        <Button typz="submit" className='checkout-btn'>Submit</Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    ); 
}

export default OrderInfo;