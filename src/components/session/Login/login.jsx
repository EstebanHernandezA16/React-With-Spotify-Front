import React from "react";
import { Container, Button } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup'
import './login.css'
import { Link } from "react-router-dom";
import { createUser } from "../../../Api/login";

export const Login = () =>{


const formik = useFormik({
    initialValues:{
        email:'',
        password:'',
    },
    validationSchema:Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().min(6,'Password must be at least 6 characters').required('Password is required')
    }),
    onSubmit: async(formValue)=>{

      const response = await createUser(formValue)

    }
})    




    return (
      <Container className="d-flex flex-column align-items-center home-container neon">
        <Form onSubmit={formik.handleSubmit}>
          <Row style={{marginTop: '15vh'}}>
            <Col>
            <h3 style={{color:'white'}}>Login</h3>
            </Col>
          </Row>
          <Row style={{marginTop: '3vh'}}>
            <Col>
            <Form.Label className="login-text">Enter Email</Form.Label>
              <Form.Control
              style={{boxShadow: '0px 0px 5vh #49cdeb', backgroundColor: 'white'}}
              name="email" 
              type="email"
              placeholder="Email Here"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (<p  style={{color: 'red', position: 'absolute'}}>{formik.errors.email}</p>)}
            </Col>
          </Row>
          <Row style={{marginTop: '4vh'}}>
            <Col>
            <Form.Label className="login-text">Enter Password</Form.Label>
              <Form.Control
              style={{boxShadow: '0px 0px 5vh #FFA500', backgroundColor: 'white'}}
              name="password" 
              type="password"
              placeholder="Password Here"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (<p style={{color: 'red', position: 'absolute'}}>{formik.errors.password}</p>)}
            </Col>
          </Row>
          <Button className="login__button"  type="submit">Login</Button>
        </Form>
        
      </Container>
    );
}