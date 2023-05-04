import './App.css';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="App">
      <h1>City Explorer</h1>
      <img className="globe" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif" alt="Rotating earth" />
      <SearchBar />
    </Container>
  );
}

export default App;
