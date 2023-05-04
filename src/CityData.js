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
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Latitude: {props.recievedData[0].lat}
                    </Card.Text>
                    <Card.Text>
                    Latitude: {props.recievedData[0].lon}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            </Col>
        </Row>

    );
}

export default CityData;