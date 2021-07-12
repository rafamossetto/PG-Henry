import styled from 'styled-components';

const MoviesColors = {
    white: "#E8E8E8",
    red: "#F05454",
    grey: "#30475E",
    black: "#222831"
}

export const StyledForm = styled.form`
    background-color: ${MoviesColors.grey};
    color: ${MoviesColors.black};
    position: absolute;
    padding: .5% 2%;
    top: 25%;
    margin-top: 3%;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    width: 35%;
    grid-template-columns: 25% 5% 70%;
    grid-template-rows: repeat(4, 1fr);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
    inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    box-sizing: border-box;
`;

export const StyledInput = styled.input`
    margin: 20px 0;
    font-size: 2rem;
    grid-column-start: 1;
    grid-column-end: 4;
    padding: .2rem .3rem;
`;

export const StyledButton = styled.input`
    font-size: 150%;
    &.up{
        height: 5rem;
        grid-column-start: 1;
        grid-column-end: 4;
        margin: 15px 0;
        background-image: url('https://yosoy.dev/wp-content/uploads/2018/11/Google-Sign-In.png');
        background-position: 47% 50.5%;
        background-size: 128.5% 250%;
        border-radius: .5rem;
        border: 1px solid ${MoviesColors.grey};
    }
    &.left{
        height: 5rem;
        grid-column-start: 1;
        grid-column-end: 2;
        margin: 5px 0;
        background-color: ${MoviesColors.red};
        color: ${MoviesColors.white};
    }
    &.right{
        height: 5rem;
        grid-column-start: 3;
        grid-column-end: 4;
        margin: 5px 0;
        background-color: ${MoviesColors.white};
    }
`;