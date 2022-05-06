import React, { useState } from 'react';
import Show from './Show';

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, confirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState(true)
    const [lastNameError, setLastNameError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmError, setconfirmPasswordError] = useState(true)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirm };
        console.log("Welcome", newUser);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!firstNameError && lastNameError && !emailError && !passwordError && !confirmError){
            alert("Successfully created")
            console.log({firstname, lastname, email, password,confirm})
            setHasBeenSubmitted(true)
        } else {
            alert("Unsuccessful")
        }
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 3) {
            setFirstNameError("Name must be 3 characters or more");
        } else {
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 3) {
            setLastNameError("Name must be 3 characters or more");
        } else {
            setLastNameError("")
    }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5)
            setEmailError("Email requires at least 5 characters")
        else{ 
            setEmailError("")
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be atleast 8 characters");
        } else {
            setPasswordError("")
        }
    }
    const handleConfirm = (e) => {
        confirmPassword(e.target.value)
        if (e.target.value !== password) {
            setconfirmPasswordError("Password must match")
        } else {
            setconfirmPasswordError("")
        }
    }
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form";
        } else {
            return "Welcome, please submit a form";
        }
    };



return (
    <>
        <form onSubmit={createUser}>
            <h3>{formMessage}</h3>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={handleFirstName} value={firstname} />
                {firstNameError}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={handleLastName} value={lastname} />
                {lastNameError}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="Email" name="email" onChange={handleEmail} value={email} />
                {emailError}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={handlePassword} value={password} />
                {passwordError}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirm" onChange={handleConfirm} value={confirm} />
                {confirmError}
            </div>
            <button disabled onChange={handleSubmit}>Submit</button>
        </form>
        <h1>Your Results</h1>
        <Show firstname={firstname} lastname={lastname} email={email} password={password} confirm={confirm} />
    </>

);
}

export default UserForm;
