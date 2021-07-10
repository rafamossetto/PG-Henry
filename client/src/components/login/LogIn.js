import React, {  useState } from "react";
import swal from 'sweetalert';
// import { useHistory } from "react-router-dom";
import StyledContainer from "./LogInStyles";
import { logIn } from "../../actions/users";
import { useDispatch } from "react-redux";

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
    if(logInState.name && logInState.password) {
      let message = await dispatch(logIn(logInState.name, logInState.password));    
      if (message === "Logged in succesfully") {
        await swal(message, "Logged", "success", {
          buttons: false,
          timer: 2000
        });
        window.location.assign("http://localhost:3000/");
      } else {
        swal(message, "No Logged!", "error", {
          buttons: false,
          timer: 3000
        });
      }
    } else {
      !logInState.name && !logInState.password ? 
        await swal("Required credentials!", "Add name or email and password", "warning", {
          buttons: false,
          timer: 3000,
          className: "swal-overlay"
        }) 
      :
      !logInState.name ? 
        await swal("Required name or email!", "Add name or email", "warning", {
          buttons: false,
          timer: 3000
        }) 
      :
      await swal("Required password!", "Add password", "warning", {
        buttons: false,
        timer: 3000
      })
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
          alt=""
          src="https://res.cloudinary.com/juancereceda/image/upload/v1625856246/Screen_Shot_2021-07-09_at_15.43.47_jwdloi.png"
          alt='Not found img'
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
