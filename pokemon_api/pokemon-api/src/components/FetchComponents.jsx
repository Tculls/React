import React, {useState} from 'react';

const FetchComponent = () => {
    const [pokemon, setPokemon] =useState([]);

    const fetchPokemonWithThen = async() =>{
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
            .then(response => {
                return response.json();
            })
            .then(jsonResponse=>{
                console.log(jsonResponse.results)
                setPokemon(jsonResponse.results)
            })
            .catch(err=>console.log(err))
        }

        return (
            <div>
                <h1>PONKONMON TIME</h1>
                <button onClick={fetchPokemonWithThen}>Fetch Pokemon</button>
                <div>
                    {pokemon.map((item)=> {
                        return <p>{item.name} </p>
                    })}
                </div>
            </div>
        )
}
export default FetchComponent;
