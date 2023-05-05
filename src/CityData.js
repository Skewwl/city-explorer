import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function CityData(props) {

    return (
        props.displayInfo &&
        <Row>
            <Col md={8}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.recievedData[0].display_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Details:</Card.Subtitle>
                    <Card.Text>
                    Latitude: {props.recievedData[0].lat}, Longitude: {props.recievedData[0].lon}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Img variant="bottom" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${props.recievedData[0].lat},${props.recievedData[0].lon}&zoom=11&size=300x150`} alt={`static map of ${props.recievedData[0].display_name}.`}/>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            </Col>
        </Row>
    );
}

export default CityData;