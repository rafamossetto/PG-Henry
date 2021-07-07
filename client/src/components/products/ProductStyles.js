import styled from 'styled-components';

export const ProductBox = styled.div`
    display:flex;
    justify-content:center;
    height:fit-content;
    margin:10px;
    min-width:100px;
    padding: 5px;
    font-size: 0.7em;    
    background-color: rgb(48, 71, 94);
`;

export const InfoBox = styled.div`
    display:flex;   
    justify-content: center;
`;
export const TextBox = styled.div`
    display:flex;
    flex-direction:column; 
    color:rgb(232, 232, 232);
    font-family: Questrial;
`;
export const Text = styled.div`
    display:flex;
    justify-content:center;
`;

export const ImgBox = styled.div`
    margin-top: 5px;
`;
export const Price = styled.div`
    color: rgb(234, 84, 85);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    margin:5px;
`;
export const ButtonBox = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    height:30px;
    width:80px;
    font-size: 1.0em;
    border-radius: 10px;
    background-color: rgba(234, 84, 85, 1);
    
`;
export const Button = styled.button`
    color:rgb(232, 232, 232);
    background-color:rgba(234, 84, 85, 1);
    border-radius: 10px;
    border:none;    
    &:hover{
        background-color:rgba(45, 64, 89, 0.3);
    }
`;
export const CounterBox = styled.div`
    color:rgb(34, 40, 49);
    height:26px;
    width:20px;
    margin:2px;
    background-color: rgb(232, 232, 232); 
`;
export const Counter = styled.p`
    margin:7px;
    color:rgb(34, 40, 49);
`;

