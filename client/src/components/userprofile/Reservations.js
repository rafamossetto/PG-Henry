import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserRes } from './ReservationsStyles';
import { userBookings } from '../../actions/users';

export default function Reservations () {
    const dispatch = useDispatch();

    let bookings = useSelector(state => state.bookings);

    useEffect(() => {
        dispatch(userBookings());
    }, [bookings]);

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