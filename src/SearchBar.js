import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CityData from './CityData';
import Modal from 'react-bootstrap/Modal';
import Weather from './Weather';

function SearchBar() {

    let [displayInfo, setDisplayInfo] = useState(false);
    let [city, setCity] = useState();
    let [recievedData, setRecievedData] = useState({});
    let [weatherData, setWeatherData] = useState();
    let [err, setErr] = useState(null);
    let [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    let handleExplore = async (e) => {
        e.preventDefault();
        try {
            let infoUrl = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`;
            const responsePromise = await axios.get(infoUrl);
            if (responsePromise) {
                setDisplayInfo(true);
            };
            setRecievedData(responsePromise.data);
            // setErr(null);
            const lat = responsePromise.data[0].lat;
            const lon = responsePromise.data[0].lon;
            let weatherUrl = `http://localhost:3001/weather?lat=${lat}&lon=${lon}`;
            console.log(weatherUrl);
            const responsePromiseWeather = await axios.get(weatherUrl);
            setWeatherData(responsePromiseWeather.data);
        }
        catch (error) {
            console.error(error);
            setErr(error.message);
            setShow(true);
            setWeatherData(null);
            setDisplayInfo(false);
        }
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
            <Row>
                <Col md={8}>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Error</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{err}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col></Col>
            </Row>
            <Weather weather={weatherData} />
        </>
    );
}

export default SearchBar;

// const locationIQRequest = async () => {
//     try {
//         let infoUrl = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`;
//         const responsePromise = await axios.get(infoUrl);
//         if (responsePromise) {
//             setDisplayInfo(true);
//         };
//         setRecievedData(responsePromise.data);
//         // setErr(null);
//     } catch (error) {
//         console.error(error);
//         setErr(error.message);
//         setShow(true);
//         setWeatherData(null);
//         setDisplayInfo(false);
//     }
// } 

// const myServerRequest = async () => {
//     try{
//         let weatherUrl = `http://localhost:3001/weather?lat=${recievedData[0].lat}&lon=${recievedData[0].lon}`;
//         console.log(weatherUrl);
//         const responsePromiseWeather = await axios.get(weatherUrl);
//         setWeatherData(responsePromiseWeather.data);
//     } catch (error) {
//         console.error(error);
//         setErr(error.message);
//         setShow(true);
//         setWeatherData(null);
//         setDisplayInfo(false);
//     }
// }