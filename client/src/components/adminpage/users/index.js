import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledDiv from './userStyles';
import { getUsers, updateUser } from '../../../actions/users';
import swal from "sweetalert";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    // const [user, setUser] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     isAdmin: false,
    //     bookings: [],
    //     banned: false,
    // })

    useEffect(() => {
        dispatch(getUsers());
    }, []);
   
    const handleSubmit = (user, e) => {
        e.preventDefault();

        const obj = {
            username: user.username,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            bookings: user.bookings,
            banned: user.banned,
        }

        if(obj.banned === 'UserBlock') {
            swal({
                title: "Are you sure?",
                text: `The Blocked to ${user.username}`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willBlocked) => {
                if (willBlocked) {
                  swal("Blocked User!", {
                    icon: "success",
                  });
                } else {
                  swal("Your user is safe!");
                }
            });
        }

        dispatch(updateUser)
        ({
            ...user,
            banned: !user.banned,
        },
        user._id
        )
    }

    return (
        <>
        {
            window.localStorage.token && users.length ?
                <StyledDiv>
                    <h1>Users registrates</h1>     
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <h2>Username</h2>
                                <h2>Email</h2>
                                <h2>Block User</h2>
                            </tr>
                        </thead>
                        <tbody>
                        {users &&
                            users.map(user => (
                                <tr>
                                    <td>
                                    </td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <button
                                    className='userButton'
                                    >{user.isAdmin ? 'ChangeToUser' : 'ChangeToAdmin'}
                                    </button>
                                    <button
                                    key={user._id}
                                    className='userButton'
                                    onClick={(e) => handleSubmit(user,e)}
                                    >{user.banned ? 'UserBlock' : 'Disable'}
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </StyledDiv>
            :
            <StyledDiv>
                <div className="errorCnt">
                    <img
                        className="sadFace"
                        src="https://res.cloudinary.com/juancereceda/image/upload/v1625945361/sad-face-in-rounded-square_q7qmr7.png"
                        alt="404"
                    />
                    <h1 className="errorMsg">Sorry! We've nothing for you here</h1>
                </div>
            </StyledDiv>
        }
        </>
    )
}

export default Users;