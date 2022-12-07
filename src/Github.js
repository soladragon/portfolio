import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

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
        <div>

            {data.length > 0 ? null : <Spinner animation="border" />}

            {data.map(item => {
                if (item.fork === false) {
                    return <p key={item.id}>{item.name}</p>
                }
            })}

            {/* {data.map(item => (

                <p key={item.id}>{item.name}</p>
            ))} */}
        </div>
    );
};

export default Github;