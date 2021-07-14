import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, isAdmin } from "../../../actions/users";

import styled from 'styled-components';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized);
        };
        verifyAdmin();
        dispatch(getUsers());
       
      }, [dispatch]);

    const StyledDiv = styled.div`
    margin-left: .8em;
    display: flex;
    flex-direction: column;
    
    h4 {
        font-weight: 600;
        font-size: 1.5em;
    }

    .userDiv {
        display: flex;
        justify-content: space-between;
        width: 50%;
        align-items: center;
        color: #ffffff;        
    }
    .userButton {
        border-radius: 15%;
        height: 3em;
        
    }
    `;

    return (
        <>
        {
            window.localStorage.token && users.length ?
                <StyledDiv>
                    <h1>Users registrates</h1>
                    {users &&
                        users.map(user => {
                            return <div className='userDiv'>
                                <h4>{user.username} 💨</h4>
                                <button className='userButton'>{user.isAdmin ? 'ChangeToUser' : 'ChangeToAdmin'}</button>
                            </div>
                        })}
                </StyledDiv>
            :
                <StyledDiv>
                    <h1>Sólo personal autorizado...</h1>
                </StyledDiv>
        }
        </>
    )
}

export default Users;