import logo from './logo.svg';
import './App.css';
import Github from './Github';
import { Routes, Route, useLocation, Link} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavbarFixed from './Navbar';

//https://react-bootstrap.github.io/getting-started/introduction
//https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=To%20install%20React%20Router%2C%20all,%2Drouter%2Ddom%406%20.

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <NavbarFixed></NavbarFixed>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>
       
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <header className="App-header">
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
                  <Link to="/github">Home</Link>
                </header>}
              />
              <Route path="github" element={<Github />} />
            </Routes>
       
        </CSSTransition>
      </TransitionGroup>
    </div >
  );
}

export default App;
