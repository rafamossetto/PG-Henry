import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StyledContainer from "./LogInStyles";
import { logIn } from "../../actions/users";
import { useDispatch, useSelector } from "react-redux";

function LogIn() {
  const dispatch = useDispatch();
  const [logInState, setLogInState] = useState({
    name: "",
    password: "",
  });

  function handleInputChange(e) {
    setLogInState({
      ...logInState,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogInSubmit(e) {
    e.preventDefault();
    let message = await dispatch(logIn(logInState.name, logInState.password));
    alert(message);
    if (message === "Logged in succesfully") {
      window.location.assign("http://localhost:3000/");
    }
  }

  return (
    <StyledContainer>
      <form onSubmit={(e) => handleLogInSubmit(e)}>
        <input
          type="text"
          placeholder="Username/email"
          name="name"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleInputChange(e)}
        />
        <img
          className="google"
          src="https://res.cloudinary.com/juancereceda/image/upload/v1625856246/Screen_Shot_2021-07-09_at_15.43.47_jwdloi.png"
        />
        <div className="btnContainer">
          <button type="submit" className="logIn">
            Log in
          </button>
          <button
            type="button"
            className="signUp"
            onClick={() =>
              window.location.assign("http://localhost:3000/signup")
            }
          >
            Sign Up
          </button>
        </div>
      </form>
    </StyledContainer>
  );
}

export default LogIn;
