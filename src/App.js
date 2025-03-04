import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Carousel from './components/Carousel';
import Register from './components//register';
import Deposit from './components//deposit';
import Cashback from './components//cashback';
import Alldata from './components//alldata';
import { UserProvider } from './components//context'; 
import Logo from './images/logo.png';


function App() {

  return (
    <>
        {/* Navbar Component */}
        <div id="home">
        <Navbar id="header">
          <img src={Logo} className="img1" alt="Logo" />
          <h4 id="head">BARODA...</h4>
          <Container>
            <Nav className="nav">
              <Nav.Link href="#carousel" id="nav-bar">Home</Nav.Link>
              <Nav.Link href="#register" id="nav-bar">Register</Nav.Link>
              <Nav.Link href="#deposit" id="nav-bar">Deposit</Nav.Link>
              <Nav.Link href="#cashback" id="nav-bar">CashBack</Nav.Link>
              <Nav.Link href="#alldata" id="nav-bar">AllData</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        


        
      {/* React Router Setup */}
      <HashRouter>
        <UserProvider>
          <Routes>
            <Route path='/Carousel' element={<Carousel />} />
            <Route path='/register' element={<Register />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/cashback' element={<Cashback />} />
            <Route path='/alldata' element={<Alldata />} />
          </Routes>
        </UserProvider>
      </HashRouter>
      </div>
    </>
  );
}

export default App;
