import React, {useState} from "react";

const Form = (props) => {
    const[newColor, setNewColor] = useState("");
    const[size, setSize] = useState(200);
    function newBox(event){
        event.preventDefault();
        props.newBox({color: newColor, size: size});
    }


    return(


    <form onSubmit={(event) => newBox(event)}>
        <div>
        <label>Color</label>
        <input type="text" value={newColor} 
        onChange = {(event) => {
        setNewColor(event.target.value);
        }}
        />
        </div>
        <div>
        <label>Size</label>
        <input type="number" value={size} 
        onChange = {(event) => {
        setSize(event.target.value);
        }}
        />  
        </div>
        <button>Add</button>
    </form>
    );
};

export default Form;