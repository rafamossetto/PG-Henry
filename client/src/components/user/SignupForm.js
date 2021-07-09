import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { StyledForm, StyledInput, StyledButton } from './SignupFormStyle.js';
import { signUp } from '../../actions/users'

export default function SignupForm() {
    const dispatch = useDispatch();

    const history = useHistory();

    const [info, setInfo] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
        passMatch: false,
        isAdmin: false,
        bookings: []
    });

    const selector = useSelector(state => state)

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
        //agregar funcion de minimo 8 caracteres
        const password = info.password;
        const comparation = event.target.value;
        password === comparation ? setInfo({...info, passMatch: true}) : setInfo({...info, passMatch: false});
    }

    async function SubmitHandler (event) {
        event.preventDefault();
        if(info.passMatch){
            const response = await dispatch(signUp(info.username, info.email, info.password));
            alert(response);
            if(response === 'Account created'){
                history.push('/')
            }
        }else{
            return alert("Passwords does'nt match");
        }
    }

    return (
            <StyledForm onSubmit={SubmitHandler}>
                <StyledInput type="text" onChange={ChangeHandler} id="username" placeholder="Username" required/>
                <StyledInput type="email" onChange={ChangeHandler} id="email" placeholder="Email" required/>
                <StyledInput type="password" onChange={ChangeHandler} id="password" placeholder="Password" required/>
                <StyledInput type="password" onChange={PasswordCorroboration} id="password-confirm" placeholder="Confirm password" required/>
                <StyledButton type="button" value="" className="up"/>
                <StyledButton type="submit" value="Sign up" className="left"/>
                <StyledButton type="button" value='Already have an account? Sign in!' className="right"/>
            </StyledForm>
    )

}