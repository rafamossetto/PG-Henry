import {useParams} from 'react-router-dom';
import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie } from '../../actions/movies';
import {Box, Container, Btn, Grid, Poster, SubH2, Title, Trailer, Rated, H4} from './styled';
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
     <Container>
     {typeof movieDetail=== 'object' && (<Grid>
        <div> 
           <Title>{movieDetail.title}</Title><br></br>
           <Poster src={movieDetail.poster}/><br></br>
        </div>
        <Trailer> 
            <ReactPlayer
              url={movieDetail.trailer}
               width ='90%'
               height ='100%'
               playing
               volume= '0.7'
         />
         </Trailer>
         <div>               
           <SubH2>Descripción</SubH2><br></br>
           <Box>{movieDetail.description}</Box><br></br>
           <Rated> 
             <H4>Runtime</H4><br></br> 
             <label>{movieDetail.runtime}</label>
             <H4>
                <label>Rated</label><br></br>
             </H4>
             <label>{movieDetail.rated}</label><br></br>
           </Rated>  
         </div>
         <div>                   
           <Btn>Get Tickets</Btn><br></br>
           <label>{movieDetail.shows? (movieDetail.shows.map(el=>
              <div>{el.field1.map(ele=>
                <div>
                  <div>{ele.Day}</div>
                  <button>{ele.show1.time}</button>
                  <button>{ele.show2.time}</button>
                  <button>{ele.show3.time}</button>
                </div> 
             )}  
              </div>
           )):<h2>No Shows</h2>}</label>
           
         </div>
         <SubH2>Director</SubH2><br></br> 
         <Box>{movieDetail.director}</Box><br></br>
         <SubH2>Cast</SubH2><br></br> 
         <Box>{movieDetail.cast}</Box><br></br>
         <SubH2>Genre</SubH2><br></br> 
         <Box>{movieDetail.genre}</Box><br></br>
         <SubH2>Shows </SubH2><br></br> 

     </Grid>)}
     </Container> 
  )
}

export default MovieDetail