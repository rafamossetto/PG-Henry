import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="NavBar">
            <div><Link className="link">Home</Link></div>
            <div><Link className="link">Billboard</Link></div>
            <div><Link className="link">Coming Soon</Link></div>
            <div><Link className="link">Contact</Link></div>
            <div><Link className="link">Merchandaising</Link></div>
            <Link className="link"><button id="cart"></button></Link>
            <Link className="link"><button id="sign">Sign In/Sign Up</button></Link>
        </div>
    )
}