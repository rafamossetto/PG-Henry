import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMovieList } from "../../actions/movies";
import { getUsers, isAdmin } from "../../actions/users";
import AdminContainer from "./AdminStyles";
import { BiCameraMovie, BiUserCheck, BiStore } from "react-icons/bi";

function AdminPage({props}) {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);


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
  useEffect(() => {
    dispatch(getMovieList());
  }, [movies, dispatch]);

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



 Return (
    <AdminContainer>
      {admin ? (
        <div className="boxContainer">
          <div className="userBox">
            <BiCameraMovie size="100" />
            <Link to='/AdminMovies' className='link'>Movies</Link>

          </div>
          <div className="userBox">
            <BiUserCheck size="100" />
            <Link to='/users' className='link'>Users</Link>
          </div>
          <div className="userBox">
            <BiStore size="100" />
            <Link to='/AdminProd' className='link'>Products</Link>
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
  )          
}

export default AdminPage;
