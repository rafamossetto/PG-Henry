
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, getUsers } from '../../../actions/users';
import swal from "sweetalert";
import StyledDiv from './userStyles';

const Users = () => { 

    
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const handleClick = (user, e) => {
        e.preventDefault()
        dispatch(getUsers());
        console.log('Admin: ', user.isAdmin)
        dispatch(updateUser(
            {
                ...user, 
                isAdmin: !user.isAdmin
            },
            user._id
        ))
        dispatch(getUsers());
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
                                <tr key={user._id}>
                                    <td>
                                    </td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <button
                                    className='userButton'
                                    onClick={(e) => handleClick(user, e)}
                                    >{user.isAdmin ? 'ChangeToUser' : 'ChangeToAdmin'}
                                    </button>
                                    <button
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