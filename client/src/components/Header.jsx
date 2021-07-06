import React from 'react';
import '../styles/Header.css';
import NavBar from './NavBar';

export default function Header() {
    return (
        <div className="Header">
            <div className="head">Henry Autocinema</div>
            <NavBar />
        </div>
    )
}