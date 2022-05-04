import React from 'react';


const PersonCard = props => {

    
    // birthday = () => {
    //     this.setState({age: this.state.age + 1 })
    // }
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            {/* <button onClick={birthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button> */}
        </div>
    );
    
}


export default PersonCard;