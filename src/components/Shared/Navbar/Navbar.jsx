import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { NavbarIcon } from '../../../Utils/Utils';
import { SpotIcon } from '../../../Utils/Utils';
import { Person } from 'react-bootstrap-icons';
import './Navbar.css'
import { AppContext } from '../../../hooks/useContext';

export const MyNavbar = () =>{

  const {auth}= useContext(AppContext)


   
    return(
        <>
        <div className='menu'>
        <Navbar>
          <Container className='navbar-container'>
            <Navbar.Brand className='' as={Link} to="/"><Image src={NavbarIcon} className='icon' /></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item className='nav-link-item'>
              <Nav.Link as={Link} to="/" className='nav-link--color'>Home</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className='nav-link-item'>
              <Nav.Link as={Link} to="/login" className='nav-link--color'>Login</Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item className='nav-link-item'>
              <Nav.Link as={Link} to="/signin" className='nav-link--color'>SignIn</Nav.Link>
              </Nav.Item> */}
              <Nav.Item className='nav-link-item'>
              <Nav.Link as={Link} to="/signin" className='nav-link--color'>In molecular building 🦠</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className='end-nav' >
              {auth?
              (<Nav.Item className='nav-link-item nav-username'>
              <Nav.Link as={Link} to="/signin" className='nav-link--color'>Loged as : {auth.username}</Nav.Link>
              </Nav.Item>): null}
              <Nav.Item >
              {/* style={{marginLeft: '600%'}} */}
                <Nav.Link as={Link} to="/login" ><Person color='whitesmoke'   size={32}/></Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        </div>
      </>
    );
}