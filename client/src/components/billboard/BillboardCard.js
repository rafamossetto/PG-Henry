import React from "react";

export default function BillboardCard ({props}) {
    return(
        <>
            <h1>{props.title}</h1>
            <img src={props.poster} alt={`Poster of the movie "${props.title}"`}/>
        </>
    );
}