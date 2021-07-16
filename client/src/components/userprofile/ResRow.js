import React from 'react';
import styled from 'styled-components';

export default function ResRow ({title, date, time, lot, extras, status, url}) {
    function handleClick (e) {
        e.preventDefault();

        window.open(url);
    }

    const But = styled.button`
        margin-top: 5px;
        border-radius: 5px;
        background-color: #E8E8E8;
        border: none;
        box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
        &:focus {
            box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3), inset 2px 3px 5px rgba(0, 0, 0, 0.5);
        }
    `;

    return (
        <tr>
            <td>{title}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>Field Here</td>
            <td>{lot}</td>
            <td>{extras.join(", ")}</td>
            <td>{status}</td>
            {status === "processing" ? <But onClick={(e) => handleClick(e)} >Pay</But> : null}
        </tr>
    )
}