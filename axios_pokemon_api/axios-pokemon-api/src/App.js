import React, { useEffect, useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [pokeApi, setPokeApi] = useState([]);

  const fetchPokemonWithThen = async() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
    .then(response => {
    console.log(response.data.results);
    setPokeApi(response.data.results);
  })
    .catch((err)=> console.log(err));
console.log("inside useEffect");
  }
      useEffect(() => {
  }, []);

  return (
    <div className="App">
        <h1>Axios Pokemon APi</h1>
        <button onClick={fetchPokemonWithThen}>Fetch Pokemon</button>
        {pokeApi.map((pokemon, index) => (
          <div key={index}>
            <ul>
            <li>{pokemon.name}</li>
            </ul>
            
            </div>
        ))}
    </div>
  );
}

export default App;
