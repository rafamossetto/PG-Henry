import styled from "styled-components";

export const StyledTitle = styled.h1`
    position: relative;
    color: #E8E8E8;
    font-size: 5rem;
    left: 50%;
    transform: translateX(-50%);
    line-height: 0;
`;

export const StyledBillboard = styled.div`
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    top: 30%;
    left: 1%;
    right: 1%;
    align-items: center;
    z-index: -100;
    margin: auto;
`;

export const StyledAside = styled.aside`
    position: fixed;
    top: 26%;
    right: 1%;
    height: 73%;
    width: 18%;
    background-color: #30475E88;
    border: 5px solid #30475E;
    box-sizing: border-box;
`;