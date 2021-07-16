import {useParams} from 'react-router-dom';
import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie} from '../../actions/movies';
import{ isAdmin } from '../../actions/users';
import {sendToProducts} from'../../actions/products';
import {Box, Container, Btn, Grid, Poster, SubH2, Title, Trailer, Rated, H4, ArrowDown, Show,Inp, Confirm, TH3,Label} from './styled';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";


function MovieDetail(){
 const dispatch = useDispatch();
 const movieDetail = useSelector(state => state.movieDetail);
//  const usersList = useSelector(state=>state.users);

const buy =  useSelector(state => state.purchase)
const[admin, setAdmin] = React.useState(null);
const[state, setState]=React.useState({
   render:false,
   confirm:false,
 })


 const {id}= useParams();
    useEffect(()=>{
     dispatch(getMovieById(id))

      return()=>{
        dispatch(clearMovie())
      }
    },[dispatch, id])
  
    
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    },[])

  function handleShow1(e){    
    e.preventDefault()
    console.log(buy)
    const day= e.target.value.split(',')
    setState({
      ...state,
      confirm: true
     })
    
    const elemento = movieDetail.shows[1].filter(el=>el.show1.time=== day[1] && el.Day === day[0])[0]
    const info ={
        title: movieDetail.title,
        price: elemento.show1.price,
        time: elemento.show1.time,
        day: elemento.Day,
        parking: elemento.show1.parkingLot
    } 
   
    dispatch(sendToProducts(info))    
   
    
   }    
    
    function handleShow2(e){
    e.preventDefault()
    
    const day= e.target.value.split(',')
    setState({
      ...state,
      confirm: true
     })
    const elemento = movieDetail.shows[1].filter(el=>el.show2.time=== day[1] && el.Day === day[0])[0]
    const info ={
      title: movieDetail.title,
      price: elemento.show2.price,
      time: elemento.show2.time,
      day: elemento.Day,
      parking: elemento.show2.parkingLot
  } 
  dispatch(sendToProducts(info))  
  }

  function handleShow3(e){
    e.preventDefault()
    
    const day= e.target.value.split(',')
    
    setState({
      ...state,
      confirm: true
     })  
    const elemento = movieDetail.shows[1].filter(el=>el.show3.time=== day[1] && el.Day === day[0])[0]
   
    const info ={
      title: movieDetail.title,
      price: elemento.show3.price,
      time: elemento.show3.time,
      day: elemento.Day,
      parking: elemento.show3.parkingLot
  } 
  dispatch(sendToProducts(info))  
  }


  function handleRender(e){
   e.preventDefault()
   setState({
     ...state,
     render: true
    })
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
             <Label>{movieDetail.runtime}</Label>
             <H4>
                <label>Rated</label><br></br>
             </H4>
             <Label>{movieDetail.rated}</Label><br></br>
           </Rated>  
         </div>
         <div>                   
          {(!admin && movieDetail.onBillboard? (<Btn onClick={handleRender}>Get Tickets<ArrowDown size='35'/></Btn>):null) || 
          (admin? (<Btn onClick={handleRender}>set shows<ArrowDown size='35'/></Btn>):null)}
          {state.render? <TH3>{movieDetail.shows && movieDetail.shows[0]}</TH3>: null}
          {state.render?(<label>{movieDetail.shows? (movieDetail.shows[1].map(el=>
              <div>
                <Show>
                  <Inp type= 'button' onClick= {handleShow1} value={[el.Day, el.show1.time]}/>
                  <Inp type='button' onClick={handleShow2} value={[el.Day,el.show2.time]}/>
                  <Inp type= 'button' onClick={handleShow3} value={[el.Day, el.show3.time]}/>
                </Show> 
             
              </div>
           )):<h2>No Shows</h2>}</label>): null}
        {state.confirm ? (<Link to ='/products'><Confirm>Confirm</Confirm> </Link>):null}
         </div>
         <SubH2>Director</SubH2><br></br> 
         <Box>{movieDetail.director}</Box><br></br>
         <SubH2>Cast</SubH2><br></br> 
         <Box>{movieDetail.cast}</Box><br></br>
         <SubH2>Genre</SubH2><br></br> 
         <Box>{movieDetail.genre}</Box><br></br>
        
     </Grid>)}
     <br/>
     <br/>
     <br/>
     <br/>
     </Container> 
  )
}

// function mapDispatchToProps(dispatch) {
//   return {
//       isAdmin: ()=>{dispatch(isAdmin())}
//   };
// }



export default MovieDetail