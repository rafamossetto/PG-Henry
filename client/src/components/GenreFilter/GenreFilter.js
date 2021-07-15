import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByGenre } from '../../actions/movies';
import { Link } from 'react-router-dom';
import

function GenreFilter(){
   const dispatch = useDispatch();
   const moviesGenre = useSelector(state => state.moviesGenre);

   const[input, setInput] = useState({
        inputGenre: ""
    })

   
    // useEffect(()=>{
    //  dispatch(getMoviesByGenre(input.inputGenre))
    // },[dispatch]) 
  
    function handleGenre(e){
        e.preventDefault()
        setInput({ inputGenre:e.target.value})
    }



     function handleSubmitGenre(e){
         e.preventDefault()
         dispatch(getMoviesByGenre(input.inputGenre))
         console.log(moviesGenre)
     }

return(
   
   ) 
}

export default GenreFilter;