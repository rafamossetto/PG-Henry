import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarAlpha, SignButton, CartButton, Linked } from './Styles';
import { TiShoppingCart as Cart } from "react-icons/ti";

export default function NavBar() {
    return (
        <NavBarAlpha>
            <div><Linked to='/home'>Home</Linked></div>
            <div><Linked to='/billboard'>Billboard</Linked></div>
            <div><Linked to='/comingsoon'>Coming Soon</Linked></div>
            <div><Linked to='/contact'>Contact</Linked></div>
            <div><Linked to='/merchandaising'>Merchandaising</Linked></div>
            <Linked><Cart size="30" /></Linked>
            <Linked><SignButton>Sign In / Sign Up</SignButton></Linked>
        </NavBarAlpha>
    )
}