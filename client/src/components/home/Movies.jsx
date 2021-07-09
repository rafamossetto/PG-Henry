import React from 'react';
import {Movie} from './Styles';

export default function MovieCard ({props}) {
    function handleClick (e, id) {
        e.preventDefault();

        window.open(`http://localhost:3000/movies/${id}`)
    }

    return (
        <Movie src={props.poster} onClick={(e) => handleClick(e, props._id)} />
    )
};