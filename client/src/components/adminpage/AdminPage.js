import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../actions/movies";
import { getUsers, isAdmin } from "../../actions/users";
import AdminContainer from "./AdminStyles";

function AdminPage() {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);
  const movies = useSelector((state) => state.movieList);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    let verifyAdmin = async () => {
      const authorized = await isAdmin();
      setAdmin(authorized);
    };
    verifyAdmin();
    dispatch(getMovieList());
    dispatch(getUsers());
  }, [dispatch]);

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
                      return <h4>{movie.title}</h4>;
                    })}
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/juancereceda/image/upload/v1625756429/swap_mgwmdl.png"
              className="swapButton"
              alt=""
              onClick={() => alert("Not functional yet")}
            />
            <div className="movieBox">
              <h2 className="boxTitle">Coming soon</h2>
              <div className="movieList">
                {movies &&
                  movies
                    .filter((movie) => !movie.onBillboard)
                    .map((movie) => {
                      return <h4>{movie.title}</h4>;
                    })}
              </div>
            </div>
          </div>
          <div className="boxContainer">
            <div className="userBox">
              <h2 className="boxTitle">Users</h2>
              <div className="userList">
                {users &&
                  users.map((user) => {
                    return <h4>{user.username}</h4>;
                  })}
              </div>
            </div>
            <form
              className="postMovieForm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="formInputContainer">
                <div>
                  <h4>Movie Title</h4>
                  <input placeholder="Movie title" />
                </div>
                <div>
                  <h4>Trailer URL</h4>
                  <input placeholder="Trailer URL" />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Release date</h4>
                  <input placeholder="Release date" />
                </div>
                <div>
                  <h4>IMDb Rating</h4>
                  <input placeholder="IMDb Rating" />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Director</h4>
                  <input placeholder="Director" />
                </div>
                <div>
                  <h4>Shows</h4>
                  <input placeholder="Shows" />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Poster URL</h4>
                  <input placeholder="Poster URL" />
                </div>
                <div>
                  <h4>Genre</h4>
                  <input placeholder="Genre" />
                </div>
              </div>
              <div className="formInputContainer">
                <div>
                  <h4>Description</h4>
                  <input placeholder="Description" />
                </div>
                <button
                  className="postMovieButton"
                  onClick={() => alert("Movie posted succesfully")}
                >
                  Post movie
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1>You are not an admin</h1>
      )}
    </AdminContainer>
  );
}

export default AdminPage;
