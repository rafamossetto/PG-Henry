import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarAlpha, SignButton, CartButton } from './Styles';
import styled from 'styled-components';

export default function NavBar() {
    const Linked = styled(Link)`
        color: #E8E8E8;
        text-decoration: none;
    `;

    return (
        <NavBarAlpha>
            <div><Linked>Home</Linked></div>
            <div><Linked>Billboard</Linked></div>
            <div><Linked>Coming Soon</Linked></div>
            <div><Linked>Contact</Linked></div>
            <div><Linked>Merchandaising</Linked></div>
            <Linked><CartButton></CartButton></Linked>
            <Linked><SignButton>Sign In/Sign Up</SignButton></Linked>
        </NavBarAlpha>
    )
}