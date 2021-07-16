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

        if(!user.banned) {
            let result = await swal({
                title: "Are you sure?",
                text: `The Blocked to ${user.username}`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            if (result) {
                await swal("Blocked User!", 
                {
                    icon: "success",
                })
                dispatch(getUsers())
                dispatch(updateUser(
                    {
                        ...user,
                        banned: !user.banned,
                    },
                    user._id
                ))
                dispatch(getUsers())
            } else {
                swal("Your user is safe!");
            }
        }
    }

    const handleClick = (user, e) => {
        e.preventDefault()
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
                                    <button
                                    className='userButton'
                                    onClick={(e) => handleClick(user, e)}
                                    >{user.isAdmin ? 'Admin' : 'User'}
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
