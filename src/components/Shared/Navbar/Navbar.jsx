import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { NavbarIcon } from '../../../Utils/Utils';
import { SpotIcon } from '../../../Utils/Utils';
import { Person } from 'react-bootstrap-icons';
import './Navbar.css'

export const MyNavbar = () =>{

   
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
            <Nav >
              {/* <Nav.Item>
                <Nav.Link as={Link}><Image src={SpotIcon} className='spoti-Icon' style={{marginLeft: '600%'}}/> </Nav.Link>
              </Nav.Item> */}
              <Nav.Item >
                <Nav.Link as={Link} to="/login" ><Person color='whitesmoke' style={{marginLeft: '600%'}}  size={32}/></Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        </div>
      </>
    );
}