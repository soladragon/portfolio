import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';




const PortfolioCard = ({ data, index }) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    setTimeout(function () {
      // code to be executed after 3 seconds
      setOpen(true);
    }, 100 * (index + 1));


  }, []);


  return (

    // <Card className="card shadow-sm">
    //   <Card.Img variant="top" src="https://via.placeholder.com/250x200" />
    //   <Card.Body>
    //     <Card.Title>{data.name}</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="outline-secondary" className="btn btn-sm">View</Button>
    //     <Button variant="outline-secondary" className="btn btn-sm">Edit</Button>
    //   </Card.Body>
    // </Card>

    <>

      <Fade in={open} timeout={300 * (index + 1)} >


        {/* <div className="card shadow-sm"> */}

        {/* <img src={logo} className="App-logo bd-placeholder-img card-img-top" alt="logo" /> */}
        <div className="box card shadow-sm">
          <div className="container-banner">
            <img src="https://via.placeholder.com/150" alt="Avatar" className="image" />
            <div className="overlay-banner">
              <div className="banner-txt">
                Javascript
              </div>
            </div>
          </div>

          <div className="card-body">
            <p className="card-text">{!data.description ? "No description entered" : data.description.substring(0, 30) + "..."}</p>
            <div className="d-flex justify-content-between align-items-center">

              <div className="btn-group">
                <Button variant="outline-secondary" className="btn btn-sm">View</Button>
                <Button variant="outline-secondary" className="btn btn-sm">Edit</Button>

              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>

      </Fade>
    </>
  );
}

export default PortfolioCard;