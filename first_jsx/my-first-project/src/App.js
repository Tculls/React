import logo from './logo.svg';
import './App.css';
import foxguy from './w3lynx_200.png';
function App() {
  return (
    <div className="App">
      <h1>HELLO DOJO!</h1>
      <h2>Things I need to do</h2>
      <ul>Learn React</ul>
      <ul>Climb Mt. Everest</ul>
      <ul>Run a Marathon</ul>
      <ul>Feed the dogs</ul>
      <ul><img src={foxguy} width="500" height="500"></img></ul>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Fart
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
