import React, { useState } from 'react';


const PersonCard = props => {
    const[ state, setState ] = useState({
        age: props.age
    });

    const handleClick = () => {
        setState({
            age: state.age +1
        })
    }
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {state.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
    
}


export default PersonCard;