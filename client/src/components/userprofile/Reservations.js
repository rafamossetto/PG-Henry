import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserRes } from './ReservationsStyles';
import { userBookings } from '../../actions/users';

export default function Reservations () {
    const dispatch = useDispatch();

    let bookings = useSelector(state => state.bookings);

    useEffect(() => {
        dispatch(userBookings());
    });

    return (
        <UserRes>
            <h3 className="tit">Your Reservations</h3>
            {bookings.length > 0 ?
            <table>
                <tr>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Field</th>
                    <th>Slot</th>
                    <th>Status</th>
                </tr>
                {bookings.map(res => <tr>
                    <td>{res.movietitle}</td>
                    <td>Date Here</td>
                    <td>Fiel Here</td>
                    <td>{res.parking_lot}</td>
                    <td>{res.status}</td>
                </tr>)}
            </table> : <h4>Sorry, no bookings found!</h4> }
        </UserRes>
    )
}