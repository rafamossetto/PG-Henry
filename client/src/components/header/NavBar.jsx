import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getTokenLocalStorage } from "../../reducer/reducer";
import { NavBarAlpha, SignButton, Cart, Linked } from './Styles';
import SignForm from './SignForm';
import { isAdmin} from '../../actions/users';
import { useHistory } from 'react-router-dom';


export default function NavBar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const token = getTokenLocalStorage();
    let [viewForm, setViewForm] = useState(false);
    let [admin, setAdmin] = useState(null);
    
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    },[])

  /*   function handleClick (e) {
        e.preventDefault();
        setViewForm(viewForm = true);
    } */

    // Hasta añadir funcionalidad on close al reducer
    // function onClose(e) {
    //     e.preventDefault();

    //     setViewForm(viewForm = false);
    // }

    return (
        <NavBarAlpha>
            <div><Linked to='/'>Home</Linked></div>
            <div><Linked to='/billboard'>Billboard</Linked></div>
            <div><Linked to='/comingsoon'>Coming Soon</Linked></div>
            <div><Linked to='/contact'>Contact</Linked></div>
            <div><Linked to='/merch'>Merchandaising</Linked></div>
            <Linked to='/mycart'><Cart size="25" /></Linked>
          { 
                admin ? 
                <Linked to='/administration'>Admin</Linked> 
                : token && admin === false
                ? <Linked to='/profile'>Account</Linked> 
                : <Linked><SignButton onClick={() => history.push('/login')}>Sign In / Sign Up</SignButton></Linked>
          }
            {!viewForm ? true : <SignForm />}
        </NavBarAlpha>
    )
}