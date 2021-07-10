import React from 'react';
import { HeaderIcon, StyledDiv } from './styles';

function Footer() {
    return (
        <StyledDiv>
            <footer className="footer">
                <div className="l-footer">
                    <h2><HeaderIcon className='asd'/></h2>
                    <h3>Autocinema App 🍿</h3>
                    <p>
                        Aplicacion diseñada y desarrollada por alumnos de Henry del Cohorte FT-13 en el proyecto grupal  y final</p>
                </div>
                <ul className="r-footer">
                    <li>
                        <h2>Social</h2>
                        <ul className="box">
                            <li><a href="www.facebook.com">Facebook</a></li>
                            <li><a href="www.twitter.com">Twitter</a></li>
                            <li><a href="www.instagram.com">Instagram</a></li>
                            <li><a href="www.pinterest.com">Pinterest</a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2>
                            Information</h2>
                        <ul className="box h-box">
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Sales</a></li>
                            <li><a href="/">Tickets</a></li>
                            <li><a href="/">Certifications</a></li>
                            <li><a href="/">Customer Service</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>
                            Legal</h2>
                        <ul className="box">
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Contract</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="b-footer">
                    <p>
                        All rights reserved by © Autocinema App </p>
                </div>
            </footer>
        </StyledDiv>
    )
}

export default Footer;