import React, {useEffect, useState} from "react";
import {useParams } from 'react-router-dom';
import axios from "axios";


const Planets = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err=>console.log(err))
    }, [])
    return (
        <fieldset>
            <legend>Planets.jsx</legend>
            {
                planet?
                <div>
                    <h3>Planet: {planet.name}</h3>
                    <h4>Climate: {planet.climate}</h4>
                    <h4>Population: {planet.population}</h4>
                    <h4>Terrain: {planet.terrain}</h4>
                </div>:
                null
            }
        </fieldset>

    
    



    );
};
export default Planets;