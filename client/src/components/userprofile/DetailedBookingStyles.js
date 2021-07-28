import styled from 'styled-components';

export const Booking = styled.div`
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    position: absolute;
    top: 32%;
    left: 30%;
    height: 425px;
    width: 40%;
    color: #30475E;
    background-color: #E8E8E8;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
                inset 2px 3px 5px rgba(0, 0, 0, 0.3),
                inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    .col {
        width: 47.5%;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .tit {
        color: #222831;
    }

    .war {
        // height: 80px;
        // width: 60%;
        color: #F05454;
    }

    .ctc {
        font-size: 100%;
    }
`;