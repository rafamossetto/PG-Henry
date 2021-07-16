import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../actions/movies";
import { StyledTitle, StyledBillboard, StyledAside, StyledPagination, StyledIndexChanger } from "./Billboard-styles";
import {
  StyledFirstAside,
  StyledSecondAside,
  StyledAsidePublicity,
} from "./Aside-styles";
import BillboardCard from "./BillboardCard";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import  GenreFilter from "../GenreFilter/GenreFilter";
import Slider from '../comboSlider/slider'


export default function Billboard() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);

  const [genre, setGenre] = useState({
     genreFilter: false
  });

  function handleGenre(e){
    e.preventDefault()
    setGenre({genreFilter:true})
  }

  function handleBack(e){
    e.preventDefault()
    setGenre({genreFilter:false})
  }

  const [index, setIndex] = useState(0);


  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  function HandleIndex (caller) {
    const option = caller.target.value;
    switch (option){
      case "→":
        if(index < Math.ceil(movieList.filter((movie) => movie.onBillboard).length/3) - 1){
          setIndex(index + 1)
        }
        break
      case "←":
        if(index > 0){
          setIndex(index - 1)
        }
        break
      default: return null;
    }
  }

  //Agrupar los generos en un array para luego filtrar las peliculas.
  let generos = movieList.map(pelicula => pelicula.genre)
  console.log(generos)

  return (
    <StyledBillboard>
      <button onClick={handleGenre}>which Film Genre are you today?</button>
      {genre.genreFilter?<button onClick={handleBack}>Back to see all on Billboard movies</button>: null}
      <StyledPagination>
        <StyledIndexChanger type="button" value="←" onClick={HandleIndex} className="plus"/>
        <p>{index+1}</p>
        <StyledIndexChanger type="button" value="→" onClick={HandleIndex} className="minus"/>
      </StyledPagination>
      <StyledTitle>Billboard Movies</StyledTitle>
      <StyledAside>
        <StyledFirstAside>
          <Slider />
        </StyledFirstAside>
        <StyledSecondAside>
          <Link>
            <p>Memories</p>
            <img
              src="https://image.flaticon.com/icons/png/512/86/86511.png"
              alt=""
              />
          </Link>
        </StyledSecondAside>
        <StyledAsidePublicity>Publicidad</StyledAsidePublicity>
      </StyledAside>
      {!genre.genreFilter ? (movieList.length > 0 ? (
        movieList
        .filter((movie) => movie.onBillboard)
        .slice(index * 3, index * 3 + 3)
        .map((movie) => <BillboardCard props={movie} key={movie._id} />)
        ): (
          <h2>Error 404!</h2>
          )): <GenreFilter/>}
      <Footer marginTop="120%" />
    </StyledBillboard>
  );
}


