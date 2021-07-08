import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Signform, FormForm, FormTitle, Labeling, Inputs, Buttons, FormButton, CloseButton } from './Styles';

export default function SignForm() {
    const [user, setUser] = useState({name: "", password: ""});

    function handleChange(e) {
        e.preventDefault();
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        );
    };

    function handleSubmit(e) {
        e.preventDefault();
        alert("Aquí autenticás");
        setUser({name: "", password: ""});
    }

    return (
        <Signform>
            <FormForm onSubmit={(e) => handleSubmit(e)}>
                <CloseButton type="button">X</CloseButton>
                <FormTitle>Already have an account? Log in!</FormTitle>
                <Labeling>Username:</Labeling>
                <Inputs name="name" type="text" value={user.name} onChange={(e) => handleChange(e)} />
                <Labeling>Password:</Labeling>
                <Inputs name="password" type="password" value={user.password} onChange={(e) => handleChange(e)} />
                <Buttons>
                    <FormButton type="submit">Log-in</FormButton>
                    <Link to='/signup' ><FormButton type="button">Register</FormButton></Link>
                </Buttons>
            </FormForm>
        </Signform>
    )
}