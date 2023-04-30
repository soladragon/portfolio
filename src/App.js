import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Github from './Github';
import NavbarFixed from './Navbar';
import PortfolioCard from './PortfolioCard';
import './Cover.css';

//https://react-bootstrap.github.io/getting-started/introduction
//https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=To%20install%20React%20Router%2C%20all,%2Drouter%2Ddom%406%20.

function App() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    try {
      //https://api.github.com/repos/soladragon/portfolio/languages
      //alternative https://api.github.com/search/repositories?q=user:soladragon&fork:false&direction=desc
      const response = await fetch('https://api.github.com/users/soladragon/repos?sort=updated&direction=desc&fork=false');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      // code to be executed after 0 seconds
      fetchData()
    }, 0);
  }, []);
  return (
    <div className="App h-100 text-center text-bg-dark">
      <Navbar bg="dark" expand="lg" className="mx-auto" variant="dark" fixed="top" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ marginTop: '20px' }}>
            <Link className="nav-link fw-bold active" to="/">Home</Link>
            <Link className="nav-link fw-bold" to="/github">Github</Link>
            <Link className="nav-link fw-bold" to="/github">Contact Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <div className='vertical-center'>
                <main className="px-3">
                  <h1>Hello, I am John Murphy</h1>
                  <p className="lead">Experienced Software Developer with a proven track record of delivering high-quality software solutions. Skilled in various programming languages and technologies, with expertise in C#, ASP.NET, and React. Dedicated to staying current with industry best practices.</p>
                </main>
              </div>
            } />
            <Route path="github" element={<Github />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div >
  );
}

export default App;