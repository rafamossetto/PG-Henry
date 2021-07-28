import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieList,
  postMovie,
  updateMovie,
  deleteMovie,
} from "../../actions/movies";
import { getUsers, isAdmin } from "../../actions/users";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import AdminContainer from "./AdminStyles";
import NotFound from "../404/NotFound";

function AdminMovies() {
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
    cast: "",
    trailer: "",
    rated: "",
    runtime: "",
    director: "",
    start: "",
    finish: "",
    days: [],
    times: [],
    price: 0,
    IMDb: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      title: movie.title,
      date: movie.date,
      poster: movie.poster,
      description: movie.description,
      genre: movie.genre,
      cast: movie.cast,
      trailer: movie.trailer,
      rated: movie.rated,
      runtime: movie.runtime,
      director: movie.director,
      start: movie.start,
      finish: movie.finish,
      functionDays: movie.days,
      times: movie.times,
      price: movie.price,
      onBillboard: false,
      IMDb: movie.IMDb,
    };

    // Validaciones

    if (!obj.functionDays.length) {
      return await swal(
        "Hey! Don't forget to select the days.",
        "Select the days",
        "warning",
        {
          buttons: false,
          timer: 2500,
        }
      );
    }
    if (!obj.times.length) {
      return await swal(
        "Hey! Don't forget to select the times.",
        "Select the times",
        "warning",
        {
          buttons: false,
          timer: 2500,
        }
      );
    }
    if (!obj.price || obj.price <= 0) {
      return await swal(
        "Hey! Don't forget the price.",
        "Put the price",
        "warning",
        {
          buttons: false,
          timer: 2500,
        }
      );
    }

    dispatch(postMovie(obj));
    await swal("Movie update successfully!", "Movie updated", "success", {
      buttons: false,
      timer: 3000,
    });

    dispatch(getMovieList());
    setMovie({
      title: "",
      date: "",
      poster: "",
      description: "",
      genre: "",
      cast: "",
      trailer: "",
      rated: "",
      runtime: "",
      director: "",
      start: "",
      finish: "",
      days: [],
      times: [],
      price: 0,
      IMDb: "",
    });
  };

  function handleRadioChange(e) {
    let radio = document.getElementById(e.target.id);
    if (radio.checked) {
      let movie = movies.find((el) => el._id === e.target.value);
      setMovieToSwap(movie);
    }
  }

  function handleSwap() {
    dispatch(getMovieList());
    if (movieToSwap) {
      updateMovie(
        {
          ...movieToSwap,
          onBillboard: !movieToSwap.onBillboard,
        },
        movieToSwap._id
      );
    }
    dispatch(getMovieList());
    setMovieToSwap(null);
  }
  function addDay(e) {
    if (!movie.days.includes(e.target.value)) {
      movie.days.push(e.target.value);
    } else {
      movie.days = movie.days.filter((el) => el !== e.target.value);
    }
  }
  function addTime(e) {
    if (!movie.times.includes(e.target.value)) {
      movie.times.push(e.target.value);
    } else {
      movie.times = movie.times.filter((el) => el !== e.target.value);
    }
  }
  
  async function handleDelete(id) {
    const willDelete = await swal({
      title: "Are you sure you want to remove movie?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (willDelete) {
      const message = await deleteMovie(id);
      dispatch(getMovieList());
      await swal(message, {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    }
  }
  // async function handleEdit(movie) {
  //   const willEdit = await swal({
  //     title: "Are you sure you want to edit movie?",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   });
  //   if (willEdit) {
  //     await swal("Go to edit movie!", {
  //       icon: "success",
  //       buttons: false,
  //       timer: 1000,
  //     });

  //   }
  // }
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
                              onClick={() => handleDelete(movie._id)}
                            >
                              X
                            </button>
                            <Link to={`/movies/${movie._id}`}>
                              <img
                                className="edit"
                                // onClick={() => handleEdit(movie)}
                                alt=""
                                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
                              />
                            </Link>
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
                              onClick={() => handleDelete(movie._id)}
                            >
                              X
                            </button>
                            <Link to={`/movies/${movie._id}`}>
                              <img
                                className="edit"
                                // onClick={() => handleEdit(movie)}
                                alt=""
                                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
                              />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
              </div>
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
                    required
                  />
                </div>
                <div>
                  <h4>Poster URL</h4>
                  <input
                    placeholder="Poster URL"
                    type="text"
                    name="poster"
                    value={movie.poster}
                    required
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
                    required
                  />
                </div>
                <div>
                  <h4>Trailer URL</h4>
                  <input
                    placeholder="Trailer URL"
                    type="text"
                    name="trailer"
                    value={movie.trailer}
                    required
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
                    required
                  />
                </div>
                <div>
                  <h4>Runtime</h4>
                  <input
                    placeholder="Runtime"
                    type="text"
                    name="runtime"
                    value={movie.runtime}
                    required
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
                    required
                  />
                </div>
                <div>
                  <h4>Genre</h4>
                  <input
                    placeholder="Genre"
                    type="text"
                    name="genre"
                    value={movie.genre}
                    required
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
                    required
                  />
                </div>
                <div>
                  <h4>IMDb Rating</h4>
                  <input
                    placeholder="Rating IMDb"
                    type="text"
                    name="IMDb"
                    value={movie.IMDb}
                    required
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Description</h4>
                  <input
                    placeholder="Description"
                    type="text"
                    name="description"
                    value={movie.description}
                    required
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Price</h4>
                  <input
                    placeholder="Price"
                    type="number"
                    name="price"
                    value={movie.price}
                  />
                </div>
                <div>
                  <h4>Rating IMDb</h4>
                  <input
                    placeholder="Rating"
                    type="text"
                    name="IMDb"
                    value={movie.IMDb}
                  />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Start of shows</h4>
                  <input
                    type="date"
                    name="start"
                    value={movie.start}
                    required
                  />
                </div>
                <div>
                  <h4>End of shows</h4>
                  <input
                    type="date"
                    name="finish"
                    value={movie.finish}
                    required
                  />
                </div>
              </div>
              <div className="formInputContainerCheck">
                <div>
                  <h4>Days</h4>
                  <div>
                    <input
                      onChange={(e) => addDay(e)}
                      type="checkbox"
                      name="Monday"
                      value="Monday"
                    />
                    <label for="Monday">Monday</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => addDay(e)}
                      type="checkbox"
                      name="Tuesday"
                      value="Tuesday"
                    />
                    <label for="Tuesday">Tuesday</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => addDay(e)}
                      type="checkbox"
                      name="Wednesday"
                      value="Wednesday"
                    />
                    <label for="Wednesday">Wednesday</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => addDay(e)}
                      type="checkbox"
                      name="Thursday"
                      value="Thursday"
                    />
                    <label for="Thursday">Thursday</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => addDay(e)}
                      type="checkbox"
                      name="Friday"
                      value="Friday"
                    />
                    <label for="Friday">Friday</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => addDay(e)}
                      type="checkbox"
                      name="Saturday"
                      value="Saturday"
                    />
                    <label for="Saturday">Saturday</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => addDay(e)}
                      type="checkbox"
                      name="Sunday"
                      value="Sunday"
                    />
                    <label for="Sunday">Sunday</label>
                  </div>
                </div>
                <div>
                  <h4 className="time">Times</h4>
                  <div>
                    <input className="time"
                      onChange={(e) => addTime(e)}
                      type="checkbox"
                      name="18hs"
                      value="18hs"
                    />
                    <label for="18hs">18hs</label>
                  </div>
                  <div>
                    <input className="time"
                      onChange={(e) => addTime(e)}
                      type="checkbox"
                      name="20hs"
                      value="20hs"
                    />
                    <label for="20hs">20hs</label>
                  </div>
                  <div>
                    <input className="time"
                      onChange={(e) => addTime(e)}
                      type="checkbox"
                      name="23hs"
                      value="23hs"
                    />
                    <label for="23hs">23hs</label>
                  </div>
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
        <NotFound />
      )}
    </AdminContainer>
  );
}

export default AdminMovies;
