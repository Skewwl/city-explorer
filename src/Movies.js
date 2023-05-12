import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Movies(props) {

    let displayMovies = () => {
        return props.moviesList.map((obj, idx)=> {
            return(
                <div key={idx}>
                    <hr />
                    <h4>Title: {obj.title}</h4>
                    <img src={obj.poster} alt='movie poster not available' />
                    <p>Overview: {obj.overview}</p>
                    <p>Release Date: {obj.releasedOn}</p>
                </div>
            );
        })    
    }

    return (
        props.moviesList &&
        <Row>
            <Col md={8} className='movies'>
                {displayMovies()}
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Movies;