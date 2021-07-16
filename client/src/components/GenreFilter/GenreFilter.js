import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, getMoviesByGenre } from "../../actions/movies";
import { Link } from "react-router-dom";
import { StyledCard, StyleFilter } from "./styles";

function GenreFilter() {
  const dispatch = useDispatch();
  const moviesGenre = useSelector((state) => state.moviesGenre);
  const allmovies = useSelector((state) => state.movieList);

  const [input, setInput] = useState({
    inputGenre: "",
  });

  function handleGetGenres(e) {
    e.preventDefault();
    dispatch(getMovieList());
    console.log(allmovies);
  }

  function handleGenre(e) {
    e.preventDefault();
    setInput({ inputGenre: e.target.value });
  }

  function handleSubmitGenre(e) {
    e.preventDefault();
    dispatch(getMoviesByGenre(input.inputGenre));
    console.log(moviesGenre);
  }

  return (
    <>
      <StyleFilter>
        <button onClick={handleGetGenres}>get Genres</button>
        <select name="name" onChange={handleGenre} value={input.inputGenre}>
          <option defaultValue>what film genre are you today?</option>
          {allmovies &&
            allmovies.map((el) => (
              <option key={el._id} value={el.genre}>
                {el.genre}
              </option>
            ))}
        </select>
        <button onClick={handleSubmitGenre}>Search</button>
      </StyleFilter>
      {moviesGenre ? (
        moviesGenre.map((el) => (
          <StyledCard>
            <h2>
              <Link to={`/movies/${el._id}`}>{el.title}</Link>
            </h2>
            <Link to={`/movies/${el._id}`}>
              <img src={el.poster} alt={`Poster of the movie "${el.title}"`} />
            </Link>
            <p>{el.description}</p>
            <h4>
              Gender: <span>{el.genre}</span>
            </h4>
            <h5>
              Cast: <span>{el.cast}</span>
            </h5>
            <h6>
              IMDB Rating: <span>{el.rating}</span>
            </h6>
          </StyledCard>
        ))
      ) : (
        <h1>
          Upps! Currently, we don´t have that Genre, meanwhile see the others
          available
        </h1>
      )}
    </>
  );
}

export default GenreFilter;
