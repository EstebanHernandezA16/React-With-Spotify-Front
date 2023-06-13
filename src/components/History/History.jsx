import React from "react";
import { ImgCard1, ImgCard2, ImgCard3 } from "../../Utils/Utils";
import { Card } from "react-bootstrap";
import './History.css'

export const History = () => {
  return (

    <div className="container history-container"  >
      <div className="row">
        <div className="col">
          <Card border="secondary" style={{ width:'20vw', backgroundColor: '#090d0e', color: 'white' }}>
            <Card.Img variant="top" src={ImgCard1} style={{height: '60vh'}} />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>Martin Garrix</Card.Title>
              <Card.Text>
              Martijn Gerard Garritsen (Born 14 May 1996), known
                    professionally as Martin Garrix and also as Ytram and GRX,
                    is a Dutch DJ and record producer who was ranked number one
                    on DJ Mag's Top 100 DJs list for three consecutive years
                    2016, 2017, and 2018. Garrix has performed at music
                    festivals such as Coachella, Electric Daisy Carnival, Ultra
                    Music Festival, Tomorrowland, and Creamfields.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
        <Card border="secondary" style={{ width:'20vw', backgroundColor: '#090d0e', color: 'white' }}>
            <Card.Img variant="top" src={ImgCard2} style={{height: '60vh'}} />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>Origins</Card.Title>
              <Card.Text>
                    Garrix was born as Martijn Gerard Garritsen on 14 May 1996
                    in Amstelveen, the son of Gerard and Karin Garritsen. He has
                    a younger sister named Laura. He showed musical interest at
                    an early age and learned to play the guitar at the age of 8.
                    In 2004, he expressed interest in becoming a DJ after seeing
                    Dutch DJ Tiësto perform at that year's Summer Olympics
                    Opening Ceremony in Athens.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
        <Card border="secondary" style={{ width:'20vw', backgroundColor: '#090d0e', color: 'white' }}>
            <Card.Img variant="top" src={ImgCard3} style={{height: '60vh'}} />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>¿One Hit?</Card.Title>
              <Card.Text>
              "Animals" is a big room house instrumental by Dutch DJ and
                    record producer Martin Garrix, released as a digital
                    download on 17 June 2013 on iTunes. The song quickly became
                    popular within the EDM culture, leading to Garrix becoming
                    the youngest producer to ever have a song reach number one
                    on the electronic music store Beatport. The track was a
                    commercial success.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};