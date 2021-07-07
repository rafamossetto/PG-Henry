import React from 'react';
import { useState } from 'react';
import { StyledForm, StyledInput, StyledButton } from './SignupFormStyle.js';


export default function SignupForm() {
    const [info, setInfo] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
        passMatch: false,
        isAdmin: false,
        bookings: []
    });
    /*info = {
        username: Username.value,
        email : E-Mail.value,
        password: Password.value,
        isAdmin: false,
        bookings: []
    }*/
    function ChangeHandler (event) {
        const property = event.target.id;
        const value = event.target.value;
        setInfo({...info, [property]: value})
    }
    function PasswordCorroboration (event) {
        const password = info.password;
        const comparation = event.target.value;
        password === comparation ? setInfo({...info, passMatch: true}) : setInfo({...info, passMatch: false});
    }
    function SubmitHandler (event) {
        event.preventDefault();
        !info.passMatch ? alert("Passwords doesn't match") : alert("Account created");
    }
    return (
            <StyledForm onSubmit={SubmitHandler}>
                <StyledInput type="text" onChange={ChangeHandler} id="username" placeholder="Username"/>
                <StyledInput type="email" onChange={ChangeHandler} id="email" placeholder="Email"/>
                <StyledInput type="password" onChange={ChangeHandler} id="password" placeholder="Password"/>
                <StyledInput type="password" onChange={PasswordCorroboration} id="password-confirm" placeholder="Confirm password"/>
                <StyledButton type="button" value="" className="up"/>
                <StyledButton type="submit" value="Sign up" className="left"/>
                <StyledButton type="button" value='Already have an account? Sign in!' className="right"/>
            </StyledForm>
    )

}