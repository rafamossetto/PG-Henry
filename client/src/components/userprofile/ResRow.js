import React from 'react';

export default function ResRow ({title, date, time, lot, extras, status}) {
    return (
        <tr>
            <td>{title}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>Field Here</td>
            <td>{lot}</td>
            <td>{extras.join(", ")}</td>
            <td>{status}</td>
        </tr>
    )
}