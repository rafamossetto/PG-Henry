import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle as Twitter, AiFillFacebook as Fb, AiFillInstagram as Instagram } from "react-icons/ai";
import { BiCameraMovie as Camera } from "react-icons/bi";

export const HeaderAlpha = styled.div`
    position: fixed;
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Head = styled.div`
    background-color: #F05454;
    width: 98%;
    height: 67.5%;
    margin-bottom: 6.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;    
    border-radius: 10px;
`;

export const NavBarAlpha = styled.div`
    height: 27.5%;
    width: 98%;
    background-color: #30475E;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
`;

export const SignButton = styled.button`
    height: 30px;
    border-radius: 5px;
    background-color: #F05454;
    color: #E8E8E8;
    border: none;
`

export const CartButton = styled.div`
    height: 30px;
    width: 30px;
    background-color: blue;
    background-image: url('https://i.imgur.com/MDMrBwe.png');
`;

export const HeadInsider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const HeaderIcon = styled(Camera)`
    height: 55px;
    width: 55px;
    padding: 12px;
    background-color: #222831;
    border-radius: 50%;
    margin-right: 30px;
    color: #E8E8E8;
`

export const Socials = styled.a`
    margin-right: 50px;
    height: 50px;
    width: 50px;
`
export const Title = styled.h1`
    color: #E8E8E8;
`

export const Linked = styled(Link)`
    color: #E8E8E8;
    text-decoration: none;
`

export const Face = styled(Fb)`
    color: #30475E;
`

export const Tweet = styled(Twitter)`
    color: #30475E;
`

export const Insta = styled(Instagram)`
    color: #30475E;
`