import React, { useState } from  'react';
import Show from './Show';
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, confirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirm };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
    <form onSubmit={ createUser }>
        <div>
                <label>First Name: </label> 
                <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) } value = { firstname } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) } value = { lastname }  />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="Email" name="email" onChange={ (e) => setEmail(e.target.value) } value = { email }  />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password"onChange={ (e) => setPassword(e.target.value) } value = { password }  />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirm" onChange={ (e) => confirmPassword(e.target.value)} value = { confirm }  />
            </div>
        </form>
        <h1>Your Results</h1>
        <Show firstname = {firstname} lastname = {lastname} email = {email} password = {password} confirm = {confirm} />
        </>
        
    );
};
    
export default UserForm;
