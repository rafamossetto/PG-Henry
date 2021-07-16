import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledDiv from './userStyles';
import { getUsers, updateUser } from '../../../actions/users';
import swal from "sweetalert";


const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    
    const ChangeClick = async (user, e) => {
        console.log('banned: ', user.banned)
        e.preventDefault();
        const blockDisable = await swal({
            title: `Are you sure you want to ${user.banned ? 'disable' : 'block'}  to ${user.username}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        if (blockDisable) {
            dispatch(getUsers())
            console.log('Admin: ', user.isAdmin)
            dispatch(updateUser(
                {
                    ...user,
                    banned: !user.banned,
                },
                user._id
            ))
            dispatch(getUsers())
            await swal("The change has been made!", {
              icon: "success",
              buttons: false,
              timer: 1500
            });
        } 
    }

    const handleClick = async (user, e) => {
        e.preventDefault()
        const changeRole = await swal({
            title: `Are you sure you want to chage the role ${user.isAdmin ? 'Amin' : 'User'}  to ${user.isAdmin ? 'User' : 'Admin'}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        if (changeRole) {
            dispatch(getUsers())
            console.log('Admin: ', user.isAdmin)
            dispatch(updateUser(
                {
                    ...user, 
                    isAdmin: !user.isAdmin
                },
                user._id
            ))
            dispatch(getUsers())
            await swal("The change has been made!", {
              icon: "success",
              buttons: false,
              timer: 1500
            });
        } 
    }

    return (
        <>
        {
            window.localStorage.token && users.length ?
                <StyledDiv>
                    <table className="container" >
                        <thead className="title">
                            <h1>Users registrates</h1>     
                            <tr className="header">
                                <td>Username</td>
                                <td>Email</td>
                                <td>Adm/User</td>
                                <td>Dis/Block</td>
                            </tr>
                        </thead>
                        <tbody className="item">
                        {users &&
                            users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <label>Is {user.isAdmin ? 'Admin' : 'User'}</label>
                                    <button
                                    className='userButton'
                                    onClick={(e) => handleClick(user, e)}
                                    >{user.isAdmin ? 'ChangeToUser' : 'ChangeToAdmin'}
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                    className='userButton'
                                    onClick={(e) => ChangeClick(user, e)}
                                    >{user.banned ? 'UserBlock' : 'Disable'}
                                    </button>
                                    </td>
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
