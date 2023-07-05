import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClientRoutes } from './components/Routes/Routes'
import { MyNavbar } from './components/Shared/Navbar/Navbar'
import { Footer } from './components/Shared/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hooks/useContext';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <AppProvider>
    <style>
      {`
        body {
          margin: 0;
          background-color: #090d0e;
          background-size: cover;
          overflow-x: hidden;
        }
      `}
    </style>
    <div style={{ width: "100vw", height: "100vh"}}>
      
      <MyNavbar />
      <ClientRoutes />
      <Footer />
     
    </div>
    </AppProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);
