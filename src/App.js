import logo from './logo.svg';
import './App.css';
import Github from './Github';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavbarFixed from './Navbar';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PortfolioCard from './PortfolioCard';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-bootstrap/Fade'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import './Cover.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Cover = () => (
  <Container fluid className="cover-container">
    <Row>
      <Col md={3}>
        <h3 className="mb-0">Cover</h3>
      </Col>
      <Col md={9}>
        <Navbar className="justify-content-end" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" aria-current="page" active>
                Home
              </Nav.Link>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Container>
);









//https://react-bootstrap.github.io/getting-started/introduction
//https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=To%20install%20React%20Router%2C%20all,%2Drouter%2Ddom%406%20.

function App() {

  const location = useLocation();

  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);





  const fetchData = async () => {
    try {
      //alternative https://api.github.com/search/repositories?q=user:soladragon&fork:false&direction=desc
      const response = await fetch('https://api.github.com/users/soladragon/repos?sort=updated&direction=desc&fork=false');

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setTimeout(function () {
      // code to be executed after 3 seconds
      fetchData()

    }, 0);

  }, []);

  return (
    <div >

{/* <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
      <img src="logo.png" alt="logo" />
      <Nav>
        <Nav.Link style={{color: "white"}} href="#home">Home</Nav.Link>
        <Nav.Link style={{color: "white"}} href="#about">About</Nav.Link>
        <Nav.Link style={{color: "white"}} href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar> */}

    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav ">
    <Nav>
      <Nav.Link style={{color: "white"}} href="/github">Home</Nav.Link>
      <Nav.Link style={{color: "white"}} href="#about">About</Nav.Link>
      <Nav.Link style={{color: "white"}} href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={300}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <div className="h-100 cover-container d-flex w-100 h-100 p-3 mx-auto flex-column App">
            
            <main className="px-3">
              <h1>Cover your page.</h1>
              <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
              </p>
            </main>
            <footer className="mt-auto text-white-50">
              <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
            </footer>
          </div>
        }/>
        <Route path="github" element={
          <Container>
            <Row xs={1} sm={1} md={2} lg={2} xl={3}>
              {data.map((item, index) => {
                if (item.fork === false) {
                  return <Col key={item.id} className="mb-5"><PortfolioCard index={index} data={item}></PortfolioCard></Col>
                }
              })}
            </Row>
          </Container>
        } />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
</div>












  );
}

export default App;
