import React, {useContext, useEffect} from "react";
import { Container, Button } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup'
import './login.css'
import { Link } from "react-router-dom";
import { loginUser } from "../../../Api/login";
import { alertHelper } from "../../../Utils/alertHelper";
import { useNavigate } from "react-router-dom";
import { checkToken, getTokenCookie, getUsername, setTokenCookie } from "../../../Utils/auth/Token";
import { AppContext } from "../../../hooks/useContext";

import jwtDecode from "jwt-decode";

export const Login = () =>{

  const {auth, setAuth}= useContext(AppContext)
  useEffect(()=>{
    updateAuth()
  },[])
  
  useEffect(()=>{
    console.log(auth);
  },[auth!=null])


  const updateAuth = () =>{
    setAuth({
      token: getTokenCookie(),
      username: jwtDecode(getTokenCookie()).username
    })

  }


  const navigate = useNavigate();


const formik = useFormik({
    initialValues:{
        username:'',
        password:'',
    },
    validationSchema:Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().min(6,'Password must be at least 6 characters').required('Password is required')
    }),
    onSubmit: async(formValue)=>{

      if(Object.keys(formik.errors).length==0){

        const response = await loginUser(formValue)

        console.log(response);


        if(response.result?.token){

          const token = response.result.token

          setTokenCookie(token)
          updateAuth()
          alertHelper('Welcome',0,'purple',`Welcome ${formValue.username}`,5000)

          // setTimeout(()=>{
          //   console.log('New Token '+ getTokenCookie());
            
          // }, 3000)
          
          // console.log('Actual Token!!!'+getTokenCookie());

          formik.resetForm();
          //navigate
          navigate('/')

        }else if(response.result?.error.includes('Username doesnt exists')){
          alertHelper('Error',3,'orange','That username isnt is registered', 5000)
        }else if (response.result?.error.includes('Operation error')){
          alertHelper('Error',1,'black','Actually we have problems on the server, please try again later', 5000)
        }

       

      }else{
        alertHelper('Error',1,'purple','All the fields are required', 6000)
      }

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
            <Form.Label className="login-text">Enter Username</Form.Label>
              <Form.Control
              style={{boxShadow: '0px 0px 5vh #49cdeb', backgroundColor: 'white'}}
              name="username" 
              type="text"
              placeholder="Username Here"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.username && formik.errors.username}
              />
              {formik.touched.username && formik.errors.username && (<p  style={{color: 'red', position: 'absolute'}}>{formik.errors.username}</p>)}
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