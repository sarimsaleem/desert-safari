import React from 'react';
import './contact.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Input, Button, message, Typography } from 'antd';
import { validationSchema } from './contactValidations';
import header from '../assets/header.jpg';
import { Col, Row } from 'react-bootstrap';
import { saveContactData } from './ContactFunction'; 

const Contact = () => {

  const initialValues = {
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Form values:', values);
    try {
      await saveContactData(values);
      message.success('Form submitted successfully!');
      resetForm(); 
    } catch (error) {
      message.error('Error submitting form.');
      console.error('Error saving data to Firebase:', error);
    }
  };
  

  return (
    <div className='contact-parent'>
      <div className='image-detail-container'>
        <img src={header} alt="" />
        <h1 className='image-text-container'>Contact Us</h1>
      </div>
      <div className="contact-subParent container">
        <div className="row contact-text-container">
          <Col md={7}>
            <h1 className='contact-subHead'>Please Fill The Form Below</h1>
            <p className='contact-para'>
              We always value feedback from our customers. If you have any questions or comments,
              please use the form below to contact us directly. We make every effort to respond
              to all requests within an hour or two.
            </p>
          </Col>
        </div>
        <div className="contact-subParent2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Row>
                  <Col className="mb-3">
                    <Typography className='label-contact' htmlFor="name">Name:</Typography>
                    <Field name="name">
                      {({ field }) => (
                        <Input {...field} placeholder="Name" />
                      )}
                    </Field>
                    <ErrorMessage name="name" component="div" style={{ color: 'red', marginTop: '10px' }} />
                  </Col>
                  <Col className="mb-3">
                    <Typography className='label-contact' htmlFor="email">Email:</Typography>
                    <Field name="email">
                      {({ field }) => (
                        <Input {...field} placeholder="Email" />
                      )}
                    </Field>
                    <ErrorMessage name="email" component="div" style={{ color: 'red', marginTop: '10px' }} />
                  </Col>
                </Row>

                <Row>
                  <Col className="mb-3">
                    <Typography className='label-contact' htmlFor="number">Number:</Typography>
                    <Field name="number">
                      {({ field }) => (
                        <Input {...field} placeholder="Number" />
                      )}
                    </Field>
                    <ErrorMessage name="number" component="div" style={{ color: 'red', marginTop: '10px' }} />
                  </Col>
                  <Col className="mb-3">
                    <Typography className='label-contact' htmlFor="subject">Subject:</Typography>
                    <Field name="subject">
                      {({ field }) => (
                        <Input {...field} placeholder="Subject" />
                      )}
                    </Field>
                    <ErrorMessage name="subject" component="div" style={{ color: 'red', marginTop: '10px' }} />
                  </Col>
                </Row>

                <Row>
                  <Col className="mb-3">
                    <Typography className='label-contact' htmlFor="message">Message:</Typography>
                    <Field name="message">
                      {({ field }) => (
                        <Input.TextArea {...field} placeholder="Message" rows={4} />
                      )}
                    </Field>
                    <ErrorMessage name="message" component="div" style={{ color: 'red', marginTop: '10px' }} />
                  </Col>
                </Row>

                <Button htmlType="submit" style={{ color: "var(--white)", background: "var(--color)", paddingBlock: "20px", paddingInline: "40px" }} >
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
