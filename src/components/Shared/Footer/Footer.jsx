import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
export const Footer = () => {
  return (
    <Container className='d-flex flex-column align-items-center footer' style={{backgroundColor: 'black',marginTop: '5vh', paddingBottom:'10vh', width: '80vw'}} >

        <div style={{textAlign: 'center', color: 'WHITE'}}>Footer</div>

    </Container>
    
  )
}
