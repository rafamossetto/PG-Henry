import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../actions/movies";
import { StyledTitle, StyledBillboard, StyledAside } from "./Billboard-styles";
import {
  StyledFirstAside,
  StyledSecondAside,
  StyledAsidePublicity,
} from "./Aside-styles";
import BillboardCard from "./BillboardCard";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import  GenreFilter from "../GenreFilter/GenreFilter";


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

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);
  return (
    <StyledBillboard>
      <button onClick={handleGenre}>which Film Genre are you today?</button>
      {genre.genreFilter?<button onClick={handleBack}>Back to see all on Billboard movies</button>: null}
      <StyledTitle>Billboard Movies</StyledTitle>
      <StyledAside>
        <StyledFirstAside>
          <Link>
            <p>Combos</p>
            <img
              src="https://image.flaticon.com/icons/png/512/864/864818.png"
              alt=""
              />
          </Link>
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
        .map((movie) => <BillboardCard props={movie} key={movie._id} />)
        ) : (
          <h2>Error 404!</h2>
          )): <GenreFilter/>}
      <Footer marginTop="120%" />
    </StyledBillboard>
  );
}
