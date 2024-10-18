import React from 'react'
import "./contact.css"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Input, Button, message } from 'antd';
import { validationSchema } from "./contactValidations"
import header from "../assets/header.jpg"
const Contact = () => {

    const initialValues = {
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
    };

    const handleSubmit = (values) => {
        // Here you can handle the form submission
        console.log('Form values:', values);
        message.success('Form submitted successfully!');
    };

    return (
        <div className='contact-parent'>
             <div className='image-detail-container'>
                <img src={header} alt="" />
                <h1 className='image-text-container'>Contact Us</h1>
            </div>
            <div className="contact-subParent container ">
                <div className="row contact-text-container">
                    <div className="col-md-6">
                        <div className="contact-text-container">
                            <h1 className='contact-subHead'>Please Fill The Form Below</h1>
                            <p className='contact-para'>We always value feedback from our customers. If you have any questions or comments, please use the form below to contact us directly. We make every effort to respond to all requests within an hour or two. </p>
                        </div>
                    </div>
                </div>
                <div className=" contact-subParent2">

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className='contact-field-div'>
                                    <label className='label-contact' htmlFor="name">Name:</label>
                                    <Field name="name">
                                        {({ field }) => (
                                            <Input {...field} placeholder="Name" />
                                        )}
                                    </Field>
                                    <ErrorMessage name="name" component="div" style={{ color: 'red', marginTop: '10px' }} />
                                </div>

                                <div className='contact-field-div'>
                                    <label className='label-contact' htmlFor="email">Email:</label>
                                    <Field name="email">
                                        {({ field }) => (
                                            <Input {...field} placeholder="Email" />
                                        )}
                                    </Field>
                                    <ErrorMessage name="email" component="div" style={{ color: 'red', marginTop: '10px' }} />
                                </div>

                                <div className='contact-field-div'>
                                    <label className='label-contact' htmlFor="number">Number:</label>
                                    <Field name="number">
                                        {({ field }) => (
                                            <Input {...field} placeholder="Number" />
                                        )}
                                    </Field>
                                    <ErrorMessage name="number" component="div" style={{ color: 'red', marginTop: '10px' }} />
                                </div>

                                <div className='contact-field-div'>
                                    <label className='label-contact' htmlFor="subject">Subject:</label>
                                    <Field name="subject">
                                        {({ field }) => (
                                            <Input {...field} placeholder="Subject" />
                                        )}
                                    </Field>
                                    <ErrorMessage name="subject" component="div" style={{ color: 'red', marginTop: '10px' }} />
                                </div>

                                <div className='contact-field-div'>
                                    <label className='label-contact' htmlFor="message">Message:</label>
                                    <Field name="message">
                                        {({ field }) => (
                                            <Input.TextArea {...field} placeholder="Message" rows={4} />
                                        )}
                                    </Field>
                                    <ErrorMessage name="message" component="div" style={{ color: 'red', marginTop: '10px' }} />
                                </div>

                                <button htmlType="submit" className='contact-btn'>
                                    Send
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Contact