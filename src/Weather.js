import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Weather(props) {

    let displayWeather = () => {
        return (
            props.weather.map((day, idx) => {
                return (
                    <Row key={idx}>
                        <p>{day.date}</p>
                        <p>{day.description}</p>
                        <hr/>
                    </Row>
                )
            })
        )
    }

    return (
        props.weather &&
        <Row>
            <Col md={8} className='weather-data'>
            <Card>
                <Card.Body>
                {displayWeather()}
                </Card.Body>
            </Card>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Weather;