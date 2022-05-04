import logo from './logo.svg';
import './App.css';
import PersonComponent from './components/MyNewComponent';
var peopleArr=[
  {"firstName": "Jane", "lastName":"Doe", "age": 45, "hairColor":"Black"},
  {"firstName": "John", "lastName":"Smith", "age": 88, "hairColor":"Brown"},
  {"firstName": "Millard", "lastName":"Fillmore", "age": 50, "hairColor":"Brown"},
  {"firstName": "Maria", "lastName":"Smith", "age": 62, "hairColor":"Brown"}
]
function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <PersonComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} ></PersonComponent>
      })}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
