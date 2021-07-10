import styled from 'styled-components';
import { BiCameraMovie as Camera } from "react-icons/bi";

export const HeaderIcon = styled(Camera)`
    height: 55px;
    width: 55px;
    padding: 12px;
    background-color: #222831;
    border-radius: 50%;
    margin-right: 30px;
    color: #e8e8e8;
    transition: 600ms;
    &:hover {
        transform: rotate(-180deg);
        transition: 600ms;
    }
`;
export const StyledDiv = styled.div`

.footer {
display: flex;
flex-flow: row wrap;
padding: 20px;
color: #fff;
background-color: #30475E;
}

.footer > * {
flex:  1 100%;
}

.l-footer {
margin-right: 1.25em;
margin-bottom: 2em;
}

h2 {
font-weight: 400;
font-size: 15px;
}

.footer ul {
list-style: none;
padding-left: 0;
}

.footer li {
line-height: 2em;
}

.footer a {
text-decoration: none;
}

.r-footer {
display: flex;
flex-flow: row wrap;
}

.r-footer > * {
flex: 1 50%;
margin-right: 1.25em;
}

.box a {
color: #999;
&:hover{
    color: #F05454;
    font-size:20px;
    transition: 300ms;
}
}

.h-box {
column-count: 2;
column-gap: 1.25em;
}

.b-footer {
text-align: center;
color: #999;
padding-top: 20px;
}

.l-footer p {
padding-right: 20%;
color: #999;
}   

@media screen and (min-width: 600px) {
.r-footer > * {
flex: 1;
}

.features {
flex-grow: 2;
}

.l-footer {
flex: 1 0px;
}

.r-footer {
flex: 2 0px;
}
}
`;
