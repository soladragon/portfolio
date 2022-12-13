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
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';



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
    setTimeout(function () {
      // code to be executed after 3 seconds
      fetchData()

    }, 0);

  }, []);

  return (
    <div className="App h-100 text-center text-bg-dark">

          <Navbar bg="dark" expand="lg" className="mx-auto" variant="dark" fixed="top" >
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto" style={{marginTop: '20px'}}>
        {/* <Nav.Link className="nav-link fw-bold active" to="/" >Home</Nav.Link>
        <Nav.Link className="nav-link fw-bold " href="/github">Github</Nav.Link>
        <Nav.Link className="nav-link fw-bold " href="#link">Contact</Nav.Link> */}
        <Link className="nav-link fw-bold active" to="/">Home</Link>
        <Link className="nav-link fw-bold " to="/github">Github</Link>
        <Link className="nav-link fw-bold " to="/github">Contact Me</Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>

      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
<div className='vertical-center '>
<main class="px-3 ">
<h1>Hello, I am John Murphy</h1>
<p class="lead">Experienced Software Developer with a proven track record of delivering high-quality software solutions.
Skilled in various programming languages and technologies, with expertise in C#, ASP.NET, and React. Dedicated to staying current with industry best practices.</p>
<p class="lead">
  <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
</p>




{/* <div style={{ display: "block", width: 700, padding: 30 }}>
  <h4>React-Bootstrap Image Component</h4>
  <Image
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
    rounded
  />
  <div style={{ position: "absolute", top: 10, right: 10 }}>
    <img src="https://via.placeholder.com/150x50/000000/ffffff" alt="banner" />
  </div>
  <Image
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
    roundedCircle
  />
</div> */}


</main>

</div>



    

              





              // <div className="">


              //   {/* <h1>Cover your page.</h1>
              //   <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
              //   <p className="lead">
              //     <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
              //   </p>
              //   <img src={logo} className="App-logo" alt="logo" />
              //   <p>
              //     Edit <code>src/App.js</code> and save to reload.
              //   </p>
              //   <a
              //     className="App-link"
              //     href="https://reactjs.org"
              //     target="_blank"
              //     rel="noopener noreferrer"
              //   >
              //     Learn React
              //   </a>
              //   <Link to="/github">Home</Link> */}
              // </div>
            }
            />
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
    </div >
  );
}

export default App;