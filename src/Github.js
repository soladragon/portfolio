import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PortfolioCard from './PortfolioCard';

const Github = () => {

    const [data, setData] = useState([]);

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
        <Container>

            <Row xs={1} sm={1} md={2} lg={2} xl={3}>

                {data.length > 0 ? null : <Spinner animation="border" />}


                {data.map((item, index) => {

                    if (item.fork === false) {

                        return <Col key={item.id} className="mb-5"><PortfolioCard index={index} data={item}></PortfolioCard></Col>

                    }
                })}

            </Row>

        </Container>

    );
};

export default Github;