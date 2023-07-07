import React, { useContext, useEffect, useState } from 'react'
import './Shop.css'
import { Card, Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { AppContext } from '../../hooks/useContext'
import { getLandingSongs } from '../../Api/Spoti';


export const Shop = () => {
  const { auth } = useContext(AppContext);
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const landingSongs = async () => {
      const response = await getLandingSongs(auth);
      setSongs(response.data.tracks);
    };
  
    if (auth) {
      console.log('shop auth', auth);
      landingSongs();
    }
  
   
  }, [auth]);



useEffect(()=>{
console.log(songs);
},[songs])
  



return (
  <>
    <Container className='d-flex flex-column align-items-center shop-container neon'>
      {auth ? (
        <div style={{ marginTop: '1vh', color: 'whitesmoke' }}>
          Welcome to the shop {auth.username}
        </div>
      ) : (
        <div>You are not logged in</div>
      )}
      {/* Song Map */}
      <div className="song-list">
        {songs.map((song) => {
          return (
            <div key={song.id} className="song-item">
              <Card
              className='shop-card'
               
              >
                <Card.Img
                  variant="top"
                  src={song.album.images[0].url}
                  style={{
                    width: song.album.images[1].width,
                    height: song.album.images[1].height,
                  }}
                />
                {/* for collabs always Martin Garrix is [0] up to that are collabs */}
                <Card.Title className="song-name">{song.name}</Card.Title>
              </Card>
             
            </div>
          );
        })}
      </div>
    </Container>
  </>
);

}
