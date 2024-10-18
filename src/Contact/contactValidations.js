import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Must be a number')
      .required('Number is required'),
    subject: Yup.string()
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });