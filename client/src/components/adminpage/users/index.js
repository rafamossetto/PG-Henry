import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, getUsers } from '../../../actions/users';
import UsersCont from './Styles'

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
            window.localStorage.token && users?.length ?
                <UsersCont>
                    <h1>Users registrates</h1>
                    {users &&
                        users.map(user => {
                            return <div className='userDiv' key={user._id}>
                                <h4>{user.username} 💨</h4>
                                <button onClick={(e) => handleClick(user, e)} className='userButton'>
                                    {user.isAdmin ? 'ChangeToUser' : 'ChangeToAdmin'}
                                </button>
                            </div>
                        })}
                </UsersCont>
            :
            <UsersCont>
                <div className="errorCnt">
                    <img
                        className="sadFace"
                        src="https://res.cloudinary.com/juancereceda/image/upload/v1625945361/sad-face-in-rounded-square_q7qmr7.png"
                        alt="404"
                    />
                    <h1 className="errorMsg">Sorry! We've nothing for you here</h1>
                </div>
            </UsersCont>
        }
        </>
    )
}

export default Users;