import React from 'react'
import { Container } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import './Home.css'
import { banner } from '../../Utils/Utils'
import { History } from '../History/History'

export const Home = () => {

    
  return (
    <>
     {/* justify-content-center    to center on y  */}
    <Container className='d-flex flex-column align-items-center home-container neon' >
    <Image id='home-container--banner' src={banner}  style={{width: '90%',height: '90%'}} />
    </Container>
    <Container className='d-flex flex-column align-items-center home-container mt-5' style={{height: '120vh'}}  >
    <History />
    </Container>       
    </>
  )
}
