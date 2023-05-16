import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Movies from './Movies';

function Weather(props) {

    let [moviesList, setMoviesList] = useState(null);

    useEffect(() => {
        setMoviesList(null);
      }, [props.weather]);

    let displayWeather = () => {
        return (
            props.weather.map((day, idx) => {
                return (
                    <Row key={idx}>
                        <p>{day.description}</p>
                        <p className='asteris'>Weather data gathered at: {day.date}.</p>
                        <p className='asteris'>*The time comes from the UTC timezone, 7-8 hours ahead of PST.</p>
                    </Row>
                )
            })
        )
    }

    let getMovies = async () => {
        let movieUrl = `http://localhost:3001/movies?&city=${props.city}`;
        let moviesResponse = await axios.get(movieUrl);
        setMoviesList(moviesResponse.data.slice(0, 5));
    }

    return (
        props.weather &&
        <>
            <Row>
                <Col md={8} className='weather-data'>
                    <Card>
                        <Card.Title>Today's Weather:</Card.Title>
                        <Card.Body>
                            {displayWeather()}
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <h3>See a list of movies about this city?</h3>
                            <Button onClick={getMovies}>Show the movies!</Button>
                            <Movies moviesList={moviesList}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default Weather;