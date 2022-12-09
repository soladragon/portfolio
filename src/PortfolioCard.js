import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';




const PortfolioCard = ({ data, index }) => {

  //https://api.github.com/repos/soladragon/portfolio/languages

  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [bannerTitle, setBannerTitle] = useState([]);

  // console.log(data.name)

  const fetchData = async () => {
    try {

      //https://api.github.com/repos/soladragon/portfolio/languages

      //alternative https://api.github.com/search/repositories?q=user:soladragon&fork:false&direction=desc
      const response = await fetch('https://api.github.com/repos/soladragon/' + data.name + '/languages');

      const json = await response.json();
      await setLanguages(json);
      console.log(languages)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

      fetchData()
      

  }, []);

  useEffect(() => {

    let language = Object.keys(languages)[0];

    if(language != null){
      language = language.replace(/[^a-zA-Z0-9 ]/g, '');
      console.log(language.toLowerCase())
      setBannerTitle(language.toLowerCase());

      
      
    }
   
  

}, [languages]);



  useEffect(() => {

    setTimeout(function () {
      // code to be executed after 3 seconds
      setOpen(true);
    }, 100 * (index + 1));


  }, []);


  useEffect(() => {


  }, []);


  return (



    <>

      <Fade in={open} timeout={300 * (index + 1)} >

      <Card className="card shadow-sm">
       <div className="gal-container large-4 columns">
            <div className={`corner-ribbon top-right sticky blue shadow ${bannerTitle} ` } >{Object.keys(languages)[0]}</div>
            {/* <img src="https://via.placeholder.com/100x75" alt="Avatar" className="gal-image" /> */}
            <Card.Img variant="top" src="https://via.placeholder.com/250x200" className="gal-image"/>
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
  
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-secondary" className="btn btn-sm">View</Button>
        <Button variant="outline-secondary" className="btn btn-sm">Edit</Button>
      </Card.Body>
    </Card>
    

      </Fade>
    </>
  );
}

export default PortfolioCard;