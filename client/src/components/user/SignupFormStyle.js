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
    padding: 1% 5%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    display: grid;
    width: 40%;
    grid-template-columns: 25% 5% 70%;
    grid-template-rows: repeat(4, 1fr);
`;

export const StyledInput = styled.input`
    margin: 20px 0;
    font-size: 3rem;
    grid-column-start: 1;
    grid-column-end: 4;
    padding: .5rem 1.5rem;
`;

export const StyledButton = styled.input`
    font-size: 150%;
    &.up{
        height: 7rem;
        grid-column-start: 1;
        grid-column-end: 4;
        margin: 15px 0;
        background-image: url('https://yosoy.dev/wp-content/uploads/2018/11/Google-Sign-In.png');
        background-position: 47% 50.5%;
        background-size: 128.5% 250%;
        border-radius: .5rem;
    }
    &.left{
        height: 5rem;
        grid-column-start: 1;
        grid-column-end: 2;
        margin: 5px 0;
        background-color: ${MoviesColors.red};
    }
    &.right{
        height: 5rem;
        grid-column-start: 3;
        grid-column-end: 4;
        margin: 5px 0;
        background-color: ${MoviesColors.white};
    }
`;