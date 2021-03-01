import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Sign.css'

const SignIn = () => {
  return (
    <Formik 
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className='sign'>
      <h4 >From quality to loyalty!</h4>
        <hr/>
        <br/>
        <label htmlFor="firstName">First Name</label>
        <br/>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <br/>
        <label htmlFor="lastName">Last Name</label>
        <br/>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <br/>
        <label htmlFor="email" >Email Address</label>
        <br/>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br/>
        <button className='warning-btn' type="submit" >Sign In</button>
      </Form>
    </Formik>
  );
};

export default SignIn;