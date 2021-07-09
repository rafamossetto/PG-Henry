import styled from 'styled-components';

// ESTILOS HOME

export const HomeCont = styled.div`
    position: absolute;
    margin-top: 0%;
    top: 25%;
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const ContMovies = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 0%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Movies = styled.div`
    margin: 1.25%;
    height: fill-available;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Billboard = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
`;

export const ComingSoon = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
`;

export const Labels = styled.label`
    margin-bottom: 5px;
    margin-top: 5px;
    color: #e8e8e8;
    font-size: 10px;
`;

export const Stores = styled.div`
    margin: 1.25%;
    background-color: #30475E;
    height: fill-available;
    width: 15%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7),
                inset 2px 3px 5px rgba(0,0,0,0.3),
                inset -2px -3px 5px rgba(0,0,0,0.5);
`;

// ESTILOS MOVIE CARDS

export const Movie = styled.img`
    height: 100%;
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
`;