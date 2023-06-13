import React from "react";

import  {Container}  from "react-bootstrap";


export const NotFound = () => {
  return (
    <Container className="d-flex flex-column align-items-center"style={{ backgroundColor: "blue", height: "80vh", marginTop: "5vh" }}>
      <h1 style={{ textAlign: "center" }}>Page not Found</h1>
    </Container>
  );
};