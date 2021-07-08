import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { NavBarAlpha, SignButton, Cart, Linked } from './Styles';
import SignForm from './SignForm';
import { isAdmin} from '../../actions/users';


export default function NavBar() {
    const token = useSelector(state => state.token)
    let [viewForm, setViewForm] = useState(false);
    let [admin, setAdmin] = useState(null);
    
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    },[])

    function handleClick (e) {
        e.preventDefault();
        setViewForm(viewForm = true);
    }

    // Hasta añadir funcionalidad on close al reducer
    // function onClose(e) {
    //     e.preventDefault();

    //     setViewForm(viewForm = false);
    // }

    return (
        <NavBarAlpha>
            <div><Linked to='/home'>Home</Linked></div>
            <div><Linked to='/billboard'>Billboard</Linked></div>
            <div><Linked to='/comingsoon'>Coming Soon</Linked></div>
            <div><Linked to='/contact'>Contact</Linked></div>
            <div><Linked to='/products'>Merchandaising</Linked></div>
            <Linked to='/mycart'><Cart size="25" /></Linked>
          { 
                admin ? 
                <Linked to='/administration'>Admin</Linked> 
                : token && admin === false
                ? <Linked to='/profile'>Account</Linked> 
                : <Linked><SignButton onClick={(e) => handleClick(e)}>Sign In / Sign Up</SignButton></Linked>
          }
            {!viewForm ? true : <SignForm />}
        </NavBarAlpha>
    )
}