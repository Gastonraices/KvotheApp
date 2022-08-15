import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera app con react.
        </p>
        <a
          className="App-link"
          href="https://c.tenor.com/5ZsLvD66UdcAAAAC/jonah-hill-dance-wolf-of-wall-street-dance.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go dancing
        </a>
      </header>
    </div>
  );
}

export default App;
