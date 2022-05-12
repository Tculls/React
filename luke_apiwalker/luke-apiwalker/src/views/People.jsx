import React, {useEffect, useState} from "react";
import {useParams } from 'react-router-dom';
import axios from "axios";

const People = (props) => {
    const {id} = useParams();
    const [people, setPeople] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>{
                setIsError(false)
                console.log(response.data)
                setPeople(response.data)
            })
            .catch(err=>console.log(err))
            setIsError(true);
    }, [props])
    if (!isError) {
        return (
            <fieldset>
                <legend>Planets.jsx</legend>
                {
                    people?
                    <div>
                        <h3>Planet: {people.name}</h3>
                        <h4>Height: {people.height}</h4>
                        <h4>Mass: {people.mass}</h4>
                        <h4>Hair Color: {people.hair_color}</h4>
                        <h4>Skin Color: {people.skin_color}</h4>
                    </div>:
                    null
                }
            </fieldset>
        );
    } else {
        return(
            <>
            <img src="2019_obiwan_2000x1270.png" width="500" height="500"/>
            <h2>MY NAME JEFF</h2>
            </>
            
        )

    }
};
export default People;