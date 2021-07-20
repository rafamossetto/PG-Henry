import axios from "axios";
import { getTokenLocalStorage } from "../reducer/reducer";
export const GET_USERS = "GET_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const GET_LOCATION = "GET_LOCATION";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";
export const GET_BOOKINGS = "GET_BOOKINGS";
export const SEARCH_USERS = "SEARCH_USERS";
export const USER_INFO = "USER_INFO";

const config = {
  headers: {
    "Access-Control-Allow-Headers": "x-access-token",
    "x-access-token": getTokenLocalStorage(),
  },
};

export function getUsers() {
  return async function (dispatch) {
    const result = await axios.get("https://movies-henry-app.herokuapp.com/users", config);
    dispatch({ type: GET_USERS, payload: result.data });
    console.log(result);
  };
}

export function getUserById(id) {
  return (dispatch) => {
    axios.get(`https://movies-henry-app.herokuapp.com/users/${id}`).then((res) => {
      dispatch({ type: GET_USER_BY_ID, payload: res.data });
    });
  };
}

export function signUp(username, email, password) {
  return async function (dispatch) {
    try {
      const token = await axios.post("https://movies-henry-app.herokuapp.com/users/signup", {
        username,
        email,
        password,
      });
      dispatch({ type: SIGNUP, payload: token.data.token });
      dispatch({
        type: USER_INFO,
        payload: { username: token.data.username, email: token.data.email },
      });
      return "Account created";
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.message);
        return error.response.data.message;
      }
    }
  };
}

export function signUpWithGoogle(tokenId) {
  return async function (dispatch) {
    try {
      const token = await axios.post(
        "https://movies-henry-app.herokuapp.com/users/google_signup",
        {
          token: tokenId,
        }
      );
      dispatch({ type: SIGNUP, payload: token.data.token });
      dispatch({
        type: USER_INFO,
        payload: { username: token.data.username, email: token.data.email },
      });
      return "Account created";
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.message);
        return error.response.data.message;
      }
    }
  };
}

export function logIn(name, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post("https://movies-henry-app.herokuapp.com/users/login", {
        name,
        password,
      });
      if (response.data.token) {
        await dispatch({ type: LOGIN, payload: response.data.token });
        dispatch({
          type: USER_INFO,
          payload: {
            username: response.data.username,
            email: response.data.email,
          },
        });
        return "Logged in succesfully";
      } else {
        return response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function logInWithGoogle(token) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://movies-henry-app.herokuapp.com/users/google_login",
        {
          token,
        }
      );
      if (response.data.token) {
        await dispatch({ type: LOGIN, payload: response.data.token });
        dispatch({
          type: USER_INFO,
          payload: {
            username: response.data.username,
            email: response.data.email,
          },
        });
        return "Logged in succesfully";
      } else {
        return response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function logOut() {
  return function (dispatch) {
    dispatch({ type: LOG_OUT });
  };
}

export async function isAdmin() {
  const result = await axios.get(
    "https://movies-henry-app.herokuapp.com/users/verifyadmin",
    config
  );
  return result.data.isAdmin;
}

export function updateUser(user, id) {
  return (dispatch) =>
    axios.put(`https://movies-henry-app.herokuapp.com/users/${id}`, user, config).then((res) => {
      dispatch({ type: UPDATE_USER, payload: res.data });
    });
}

export function userBookings() {
  return async function (dispatch) {
    const bookings = await axios.get(
      "https://movies-henry-app.herokuapp.com/users/bookings",
      config
    );
    await dispatch({ type: GET_BOOKINGS, payload: bookings.data });
    return "Bookings loaded";
  };
}

export function searchUsers(name) {
  return (dispatch) => {
    axios.get(`https://movies-henry-app.herokuapp.com/users?name=${name}`).then((res) => {
      dispatch({ type: SEARCH_USERS, payload: res.data });
    });
  };
}

export async function verifyUser(email) {
  try {
    let result = await axios.post("https://movies-henry-app.herokuapp.com/users/verifyuser", {
      email,
    });
    return result.data.message;
  } catch (error) {
    console.log(error);
  }
}
export async function verifyToken(token) {
  try {
    let result = await axios.post("https://movies-henry-app.herokuapp.com/users/verifytoken", {
      token,
    });
    return result.data.message;
  } catch (error) {
    console.log(error);
  }
}

export async function changePassword(password, token) {
  try {
    let result = await axios.put(
      "https://movies-henry-app.herokuapp.com/users/restorepassword",
      { password },
      {
        headers: {
          "Access-Control-Allow-Headers": "x-access-token",
          "x-access-token": token,
        },
      }
    );
    return result.data.message;
  } catch (error) {
    return error.response.data.message;
  }
}
