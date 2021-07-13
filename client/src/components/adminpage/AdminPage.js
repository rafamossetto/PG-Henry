import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovieList, postMovie, updateMovie } from "../../actions/movies";
import { getUsers, isAdmin } from "../../actions/users";
import AdminContainer from "./AdminStyles";

function AdminPage() {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);
  const movies = useSelector((state) => state.movieList);  
  const [movieToSwap, setMovieToSwap] = useState(null);

  const [movie, setMovie] = useState({
    title: "",
    date: "",
    poster: "",
    description: "",
    genre: "",
    shows: [],
    cast: "",
    trailer: "",
    rated: "",
    runtime: "",
    director: "",
  });

  useEffect(() => {
    let verifyAdmin = async () => {
      const authorized = await isAdmin();
      setAdmin(authorized);
    };
    verifyAdmin();
    dispatch(getMovieList());
    dispatch(getUsers());
  }, [dispatch]);

  const ChangeInput = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      title: movie.title,
      date: movie.date,
      poster: movie.poster,
      description: movie.description,
      genre: movie.genre,
      shows: movie.show,
      cast: movie.cast,
      trailer: movie.trailer,
      rated: movie.rated,
      runtime: movie.runtime,
      director: movie.director,
    };

    // Validaciones
    if (!obj.title) {
      alert("Hey! Don't forget the title.");
      return;
    }
    if (!obj.poster) {
      alert("Hey! Don't forget the poster.");
      return;
    }
    if (!obj.date) {
      alert("Hey! Don't forget the date.");
      return;
    }
    if (!obj.trailer) {
      alert("Hey! Don't forget the trailer");
      return;
    }
    if (!obj.cast) {
      alert("Hey! Don't forget the cast");
      return;
    }
    if (!obj.runtime) {
      alert("Hey! Don't forget the runtime");
      return;
    }
    if (!obj.director) {
      alert("Hey! Don't forget the director");
      return;
    }
    if (!obj.genre) {
      alert("Hey! Don't forget the genre.");
      return;
    }
    if (!obj.rated) {
      alert("Hey! Don't forget the rated");
      return;
    }
    if (!obj.description) {
      alert("Hey! Don't forget the description.");
      return;
    }

    dispatch(postMovie(movie));
    alert("Movie update successfully!");
    setMovie({
      title: "",
      date: "",
      poster: "",
      description: "",
      genre: "",
      shows: [],
      cast: "",
      trailer: "",
      rated: "",
      runtime: "",
      director: "",
    });
  };
  // useEffect(() => {
  //   dispatch(getMovieList());
  // }, [movies, dispatch]);

  function handleRadioChange(e) {
    let radio = document.getElementById(e.target.id);
    if (radio.checked) {
      let movie = movies.find((el) => el._id === e.target.value);
      setMovieToSwap(movie);
    }
  }

  function handleSwap() {
    if (movieToSwap) {
      updateMovie(
        {
          ...movieToSwap,
          onBillboard: !movieToSwap.onBillboard,
        },
        movieToSwap._id
      );
    }
    setMovieToSwap(null);
  }

  return (
    <AdminContainer>
      {admin ? (
        <div className="isAdmin">
          <div className="boxContainer">
            <div className="movieBox">
              <h2 className="boxTitle">On billboard</h2>
              <div className="movieList">
                {movies &&
                  movies
                    .filter((movie) => movie.onBillboard)
                    .map((movie) => {
                      return (
                        <div className="movieCnt">
                          <label className="checkMovie">
                            <input
                              type="radio"
                              id={movie._id}
                              name="movie"
                              value={movie._id}
                              onChange={(e) => handleRadioChange(e)}
                            ></input>
                            <h4>{movie.title}</h4>
                          </label>

                          <div className="removeEdit">
                            <button
                              className="remove"
                              onClick={() => alert("Delete")}
                            >
                              X
                            </button>
                            <img
                              className="edit"
                              onClick={() => alert("Edit")}
                              alt=""
                              src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
                            />
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/juancereceda/image/upload/v1625756429/swap_mgwmdl.png"
              className="swapButton"
              alt=""
              onClick={() => handleSwap()}
            />
            <div className="movieBox">
              <h2 className="boxTitle">Coming soon</h2>
              <div className="movieList">
                {movies &&
                  movies
                    .filter((movie) => !movie.onBillboard)
                    .map((movie) => {
                      return (
                        <div className="movieCnt">
                          <label className="checkMovie">
                            <input
                              type="radio"
                              id={movie._id}
                              name="movie"
                              value={movie._id}
                              onChange={(e) => handleRadioChange(e)}
                            ></input>
                            <h4>{movie.title}</h4>
                          </label>
                          <div className="removeEdit">
                            <button
                              className="remove"
                              onClick={() => alert("Delete")}
                            >
                              X
                            </button>
                            <img
                              className="edit"
                              onClick={() => alert("Edit")}
                              alt=""
                              src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
                            />
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>

          <div className="boxContainer">
            <div className="userBox">
              <Link to='/users' className='link'>Users Administration</Link>
            </div>
          </div>

          <div className="boxContainer">
            <form
              className="postMovieForm"
              onChange={(e) => ChangeInput(e)}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="formInputContainer">
                <div>
                  <h4>Movie Title</h4>
                  <input
                    placeholder="Movie title"
                    type="text"
                    name="title"
                    value={movie.title}
                  />
                </div>
                <div>
                  <h4>Poster URL</h4>
                  <input
                    placeholder="Poster URL"
                    type="text"
                    name="poster"
                    value={movie.poster}
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Release date</h4>
                  <input
                    placeholder="Release date"
                    type="date"
                    name="date"
                    value={movie.date}
                  />
                </div>
                <div>
                  <h4>Trailer URL</h4>
                  <input
                    placeholder="Trailer URL"
                    type="text"
                    name="trailer"
                    value={movie.trailer}
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Cast</h4>
                  <input
                    placeholder="Cast"
                    type="text"
                    name="cast"
                    value={movie.cast}
                  />
                </div>
                <div>
                  <h4>Runtime</h4>
                  <input
                    placeholder="Runtime"
                    type="text"
                    name="runtime"
                    value={movie.runtime}
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Director</h4>
                  <input
                    placeholder="Director"
                    type="text"
                    name="director"
                    value={movie.director}
                  />
                </div>
                <div>
                  <h4>Genre</h4>
                  <input
                    placeholder="Genre"
                    type="text"
                    name="genre"
                    value={movie.genre}
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Rated</h4>
                  <input
                    placeholder="Rated"
                    type="text"
                    name="rated"
                    value={movie.rated}
                  />
                </div>
                <div>
                  <h4>Description</h4>
                  <input
                    placeholder="Description"
                    type="text"
                    name="description"
                    value={movie.description}
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <button className="postMovieButton" type="submit">
                  Post movie
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="errorCnt">
          <img
            className="sadFace"
            src="https://res.cloudinary.com/juancereceda/image/upload/v1625945361/sad-face-in-rounded-square_q7qmr7.png"
            alt="404"
          />
          <h1 className="errorMsg">Sorry! We've nothing for you here</h1>
        </div>
      )}
    </AdminContainer>
  );
}

export default AdminPage;
