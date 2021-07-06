import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie } from '../../actions/movies';
import styled from 'styled-components';


function MovieDetail(){
 const dispatch = useDispatch();
 const movieDetail = useSelector(state => state.movieDetail);
 const {id}= useParams();
    useEffect(()=>{
      dispatch(getMovieById(id))
      return()=>{
        dispatch(clearMovie())
      }
    },[dispatch, id])

 return(
     <>
     {/* {movieDetail? <h1>{movieDetail.title}</h1>:<h1>No encontrado</h1>} */}
     {typeof movieDetail=== 'object' && (<div>
         <label>{movieDetail.title}</label><br></br>
         <label>{movieDetail.poster}</label><br></br>
         <label>{movieDetail.trailer}</label><br></br>
         <label>{movieDetail.description}</label><br></br>
         <label>{movieDetail.genre}</label><br></br>
         <label>{movieDetail.imbdID}</label><br></br>
     </div>)}
     </>
 )
}

export default MovieDetail;