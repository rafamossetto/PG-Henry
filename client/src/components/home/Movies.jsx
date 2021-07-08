import React from 'react';
import {Movie} from './Styles';

export default function MovieCard ({props}) {
    return (
        <Movie src={props.poster} />
    )
};