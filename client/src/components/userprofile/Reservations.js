import React from 'react';
import { UserRes } from './ReservationsStyles';

export default function Reservations () {
    return (
        <UserRes>
            <h3 className="tit">Your Reservations</h3>
            <table>
                <tr>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Field</th>
                    <th>Slot</th>
                </tr>
                <tr>
                    <td>Movie 1</td>
                    <td>Date 1</td>
                    <td>Field 1</td>
                    <td>C2</td>
                </tr>
                <tr>
                    <td>Movie 2</td>
                    <td>Date 2</td>
                    <td>Field 2</td>
                    <td>B8</td>
                </tr>
            </table>
        </UserRes>
    )
}