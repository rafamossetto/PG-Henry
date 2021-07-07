import React, { useEffect} from 'react';
import {useParams} from 'react-router-dom';
import React, { useEffect, useParams } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie } from '../../actions/movies';
import {Box, Container, Btn, Grid, Poster, SubH2, Title, Trailer, Rated} from './styled';
import ReactPlayer from 'react-player';

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
     <Container className="container">
     {/* {movieDetail? <h1>{movieDetail.title}</h1>:<h1>No encontrado</h1>} */}

     {typeof movieDetail=== 'object' && (<Grid>
        <div> 
           <Title>{movieDetail.title}</Title><br></br>
           <Poster src={movieDetail.poster}/><br></br>
        </div>
        <Trailer> 
            <ReactPlayer
              url={movieDetail.trailer}
               width ='90%'
               height ='90%'
               playing
               volume= '0.7'
         />
         </Trailer>
         <div>               
           <SubH2>Descripción</SubH2><br></br>
           <Box>{movieDetail.description}</Box><br></br>
           <Rated> 
             <h4>Runtime</h4><br></br> 
             <label>{movieDetail.runtime}</label><br></br>
             <h4>Rated</h4><br></br> 
             <label>{movieDetail.rated}</label><br></br>
           </Rated>
         </div>
         <div>                   
           <Btn>Get Tickets</Btn>
           <label>{movieDetail.shows}</label><br></br>
         </div>
         <SubH2>Director</SubH2><br></br> 
         <Box>{movieDetail.director}</Box><br></br>
         <SubH2>Cast</SubH2><br></br> 
         <Box>{movieDetail.cast}</Box><br></br>
         <SubH2>Genre</SubH2><br></br> 
         <Box>{movieDetail.genre}</Box><br></br>
         <SubH2>Shows</SubH2><br></br> 
     </Grid>)}
     </Container>
     {typeof movieDetail=== 'object' && (<div>
         <label>{movieDetail.title}</label><br></br>
         <label>{movieDetail.poster}</label><br></br>
         <label>{movieDetail.trailer}</label><br></br>
         <label>{movieDetail.date}</label><br></br>
         <label>{movieDetail.description}</label><br></br>
         <label>{movieDetail.genre}</label><br></br>
         <label>{movieDetail.cast}</label><br></br>
         <label>{movieDetail.runtime}</label><br></br>
         <label>{movieDetail.rated}</label><br></br>
         <label>{movieDetail.director}</label><br></br>
         <label>{movieDetail.shows}</label><br></br>
     </div>)}
     </>

 )
}

export default MovieDetail