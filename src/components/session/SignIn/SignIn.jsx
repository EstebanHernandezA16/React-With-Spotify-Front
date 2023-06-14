import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import './SignIn.css'
import { useFormik } from "formik";
import * as Yup from 'yup'



export const SignIn = () =>{


const formik = useFormik({
    initialValues:{

        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        dob:'',
        firstName:'',
        middleName:'',
        lastName:'',
        secondLastName:'',
        country:'',
        //role?

    },
    validationSchema:Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().required('Email is required'),
        password: Yup.string().min(6,'Password must be at least 6 characters').required('Password is required'),
        dob: Yup.date().notRequired(),
        // firstName

    }),
    onSubmit: async(formValue) =>{

    }
})


    return(
        <Container className="d-flex flex-column align-items-center home-container neon">
            
            <Form onSubmit={formik.handleSubmit}>
          <Row style={{marginTop: '15vh'}}>
            <Col>
            <h3 style={{color:'white'}}>SignIn for free</h3>
            </Col>
          </Row>
          <Row style={{marginTop: '3vh'}}>
            <Col>
            <Form.Label className="login-text">Enter Username</Form.Label>
              <Form.Control
              style={{boxShadow: '0px 0px 5vh #49cdeb', backgroundColor: 'white'}}
              name="username" 
              type="text"
              placeholder="Username Here"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.username && formik.errors.username}
              />
              {formik.touched.username && formik.errors.username && (<p  style={{color: 'red', position: 'absolute'}}>{formik.errors.username}</p>)}
            </Col>
        
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
          <Button className="login__button"  type="submit">Register now</Button>
        </Form>
        </Container>
    );
}