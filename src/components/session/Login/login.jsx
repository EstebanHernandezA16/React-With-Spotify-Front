import React from "react";
import { Container } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup'


export const Login = () =>{


const formik = useFormik({
    initialValues:{
        email:'',
        password:'',
    },
    validationSchema:Yup.object({
        email: Yup.string().required('Username is required'),
        password: Yup.string().min(6,'Password must be at least 6 characters').required('Password is required')
    }),
    onSubmit: async(formValue)=>{

    }
})    




    return (
      <Container className="d-flex flex-column align-items-center home-container neon">
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col>
            <Form.Label>Enter Email</Form.Label>
              <Form.Control
              name="email" 
              type="email"
              placeholder="Enter Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (<p style={{color: 'red'}}>{formik.errors.email}</p>)}
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Label>Enter Password</Form.Label>
              <Form.Control
              name="password" 
              type="password"
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (<p style={{color: 'red'}}>{formik.errors.password}</p>)}
            </Col>
          </Row>
        </Form>
      </Container>
    );
}