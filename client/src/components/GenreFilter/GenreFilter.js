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
    <>
    <input name='genere' type='text' onChange={handleGenre} value={input.inputGenre} placeholder='¿qué genero de peli, quieres ver?'/>
    <button onClick={handleSubmitGenre}>Search</button>
    // {!input.name? <BillboardCard/>: 
        {moviesGenre? moviesGenre.map((el)=>(
        <div>
           <h2><Link to={`/movies/${el._id}`}>{el.title}</Link></h2>
            <Link to={`/movies/${el._id}`}><img src={el.poster} alt={`Poster of the movie "${el.title}"`}/></Link>
            <p>{el.description}</p>
            <h4>Gender: <span>{el.genre}</span></h4>
            <h5>Cast: <span>{el.cast}</span></h5>
            <h6>IMDB Rating: <span>{el.rating}</span></h6>
        </div>
    )): <div className="errorCnt">
          <img align-text='center'
             className="sadFace"
            src="https://res.cloudinary.com/juancereceda/image/upload/v1625945361/sad-face-in-rounded-square_q7qmr7.png"
            alt="404"
          />
          <h1 className="errorMsg">Upps! Currently, we don't have that genre, meanwhile explore others</h1>
       </div>}
    </>
   ) 
}

export default GenreFilter;