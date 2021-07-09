import {useParams} from 'react-router-dom';
import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie } from '../../actions/movies';
import {sendToProducts} from'../../actions/products';
import {Box, Container, Btn, Grid, Poster, SubH2, Title, Trailer, Rated, H4, ArrowDown} from './styled';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

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

  function handleShow1(e){
    e.preventDefault()
    
    const day= e.target.value.split(',')
    
    
    const elemento = movieDetail.shows[0].field1.filter(el=>el.show1.time=== day[1] && el.Day === day[0])[0]
    console.log(elemento) 
    const info ={
        title: movieDetail.title,
        price: elemento.show1.price,
        time: elemento.show1.time,
        day: elemento.Day,
        parking: elemento.show1.parkingLot
    } 
    sendToProducts(info)    
      
    
  }
  function handleShow2(e){
    e.preventDefault()
    
    const day= e.target.value.split(',')
    console.log(day)
    
    const elemento = movieDetail.shows[0].field1.filter(el=>el.show2.time=== day[1] && el.Day === day[0])[0]
    const info ={
      title: movieDetail.title,
      price: elemento.show2.price,
      time: elemento.show2.time,
      day: elemento.Day,
      parking: elemento.show2.parkingLot
  } 
  sendToProducts(info)  
    
  }
  function handleShow3(e){
    e.preventDefault()
    
    const day= e.target.value.split(',')
    console.log(day)
    
    const elemento = movieDetail.shows[0].field1.filter(el=>el.show3.time=== day[1] && el.Day === day[0])[0]
    console.log(elemento) 
    const info ={
      title: movieDetail.title,
      price: elemento.show3.price,
      time: elemento.show3.time,
      day: elemento.Day,
      parking: elemento.show3.parkingLot
  } 
  sendToProducts(info)  
    
  }


 

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
           <Btn>Get Tickets<ArrowDown size='35'/></Btn><br></br>
           <label>{movieDetail.shows? (movieDetail.shows.map(el=>
              <div>{el.field1.map(ele=>
      
                <div>
                  <input type= 'button' onClick= {handleShow1} value={[ele.Day, ele.show1.time]}/>
                  <input type='button' onClick={handleShow2} value={[ele.Day,ele.show2.time]}/>
                  <input type= 'button' onClick={handleShow3} value={[ele.Day, ele.show3.time]}/>
                </div> 
             )}  
              </div>
           )):<h2>No Shows</h2>}</label>
         <Link to ='/products'><button>Confirm</button> </Link>
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