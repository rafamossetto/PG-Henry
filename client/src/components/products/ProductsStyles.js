import styled from 'styled-components';

export const ProductsBox = styled.div`
    display:flex;
    overflow-x:auto;
    overflow-y:hidden;
`;
export const Container = styled.div`
    background-color: rgba(45, 64, 89, 1);
    padding-top: 140px;
    display:block;
`;
export const MovieData = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
`;
export const MovieDetails = styled.div`
    position:static;
    margin-left:20px;
    min-width: 250px;
    color:rgba(255, 255, 255, 1);
    font-family: Questrial;
    display:flex;
    flex-direction: column;
`;
export const ParkingLot = styled.div`
    display:block;
    width:400px;
    height:250px;
    background-color: rgb(48, 71, 94);
`;
export const RedText = styled.div`
    margin-left:10px;   
    color:rgb(234, 84, 85);
    font-family: Questrial;
    font-size: 13px;
`;
export const BuyBox = styled.div`
    background-color: rgba(45, 64, 89, 1);
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 50px;
    color:rgba(255, 255, 255, 1);
    font-family: Questrial;
    font-size: 12px;
`;
export const BuyButton = styled.button`
    margin-left:10px;
    color:rgba(255, 255, 255, 1);
    font-family: Questrial;
    font-size: 12px;
    background-color:rgba(234, 84, 85, 1);
    border:none;
    border-radius:5px;
    width:50px;
    height:35px;
    &:hover{
        background-color:rgba(234, 84, 85, 0.7);
    }
`;





