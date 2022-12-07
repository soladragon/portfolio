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
    <div className="App">


      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={

              <div className="App-header text-bg-dark">

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                  <header className="mb-auto">
                    <div>
                      <h3 className="float-md-start mb-0">Cover</h3>
                      <nav className="nav nav-masthead justify-content-center float-md-end">
                        <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
                        <a className="nav-link fw-bold py-1 px-0" href="#">Features</a>
                        <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a>
                      </nav>
                    </div>
                  </header>

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
                {/* <h1>Cover your page.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                  <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <Link to="/github">Home</Link> */}
              </div>
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
