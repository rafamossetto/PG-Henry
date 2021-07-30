import React from 'react';
import {Movie} from './Styles';

export default function MovieCard ({props, isAdmin}) {
    const handleClick = (e, id) =>  {
        e.preventDefault();
        window.open(`http://henry-movie-app.vercel.app/movies/${id}`)
    };

    const handleEdit = (id) => {
        const editConfirm = window.confirm(`Do you want edit ${props.title}?`)
        if (editConfirm) window.open(`http://henry-movie-app.vercel.app/administration/${id}`);
    };

    return (
        <Movie src={props.poster} onAuxClick={() => isAdmin && handleEdit(props._id)} onClick={(e) => handleClick(e, props._id)} />
    )
};