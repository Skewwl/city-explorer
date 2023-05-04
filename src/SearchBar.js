import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CityData from './CityData';

function SearchBar() {

    let [displayInfo, setDisplayInfo] = useState(false);
    let [city, setCity] = useState();
    let [recievedData, setRecievedData] = useState({});


    let handleExplore = async (e) => {
        e.preventDefault();
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`;
        const response = await axios.get(url);
        setDisplayInfo(true);
        setRecievedData(response.data);
        // console.log(response.data, displayInfo);
    };

    return (
        <>
            <Row>
                <Col md={8}>
                    <Form onSubmit={handleExplore}>
                        <Form.Group className="mb-3">
                            <Form.Label>Where would you like to search?</Form.Label>
                            <Form.Control type="text" placeholder="City Name" onChange={(e) => setCity(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Explore!
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            <CityData className="city-data" displayInfo={displayInfo} recievedData={recievedData} />
        </>
    );
}

export default SearchBar;