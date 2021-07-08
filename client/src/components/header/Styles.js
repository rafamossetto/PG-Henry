import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillTwitterCircle as Twitter,
  AiFillFacebook as Fb,
  AiFillInstagram as Instagram,
} from "react-icons/ai";
import { BiCameraMovie as Camera } from "react-icons/bi";
import { TiShoppingCart as ShoppingCart } from "react-icons/ti";

// ESTILOS DEL HEADER

export const HeaderAlpha = styled.div`
  position: fixed;
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #222831;
`;

export const Head = styled.div`
  background-color: #f05454;
  width: 98%;
  height: 67.5%;
  margin-bottom: 6.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

export const HeadInsider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderIcon = styled(Camera)`
  height: 55px;
  width: 55px;
  padding: 12px;
  background-color: #222831;
  border-radius: 50%;
  margin-right: 30px;
  color: #e8e8e8;
`;

export const Socials = styled.a`
  margin-right: 50px;
  height: 50px;
  width: 50px;
`;
export const Title = styled.h1`
  color: #e8e8e8;
`;

export const Face = styled(Fb)`
  color: #30475e;
`;

export const Tweet = styled(Twitter)`
  color: #30475e;
`;

export const Insta = styled(Instagram)`
  color: #30475e;
`;

// ESTILOS DEL NAVBAR

export const NavBarAlpha = styled.div`
  height: 27.5%;
  width: 98%;
  background-color: #30475e;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
`;

export const SignButton = styled.button`
  height: 30px;
  border-radius: 5px;
  background-color: #f05454;
  color: #e8e8e8;
  border: none;
`;

export const Cart = styled(ShoppingCart)`
  color: #e8e8e8;
`;

export const Linked = styled(Link)`
  color: #e8e8e8;
  text-decoration: none;
`;

// ESTILOS SIGNFORM

export const Signform = styled.div`
  position: fixed;
  top: 15%;
  left: 30%;
  height: 70%;
  width: 40%;
  background-color: rgba(48, 71, 94, 0.75);
  border-radius: 10px;
  border: solid 1px #e8e8e8;
  padding-top: 25px;
`;

export const FormForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  color: #e8e8e8;
  font-size: 150%;
  margin-bottom: 50px;
`;

export const Labeling = styled.label`
  color: #e8e8e8;
  align-self: flex-start;
  margin-bottom: 5px;
  margin-left: 80px;
`;

export const Inputs = styled.input`
  margin-bottom: 75px;
  align-self: flex-start;
  margin-left: 80px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-right: 80px;
  align-self: flex-end;
`;

export const FormButton = styled.button`
  height: 30px;
  background-color: #f05454;
  color: #e8e8e8;
  border: none;
  margin-left: 5px;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  height: 25px;
  width: 25px;
  background-color: #f05454;
  color: #e8e8e8;
  border-radius: 10px;
  border: none;
  margin-right: 20px;
  align-self: flex-end;
`;
