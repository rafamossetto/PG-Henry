import axios from "axios";
import { getTokenLocalStorage } from "../reducer/reducer";
export const GET_USERS = "GET_USERS";
export const GET_LOCATION = "GET_LOCATION";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";
export const GET_BOOKINGS = "GET_BOOKINGS";

const config = {
  headers: {
    "Access-Control-Allow-Headers": "x-access-token",
    "x-access-token": getTokenLocalStorage(),
  },
};

export function getUsers() {
  return async function (dispatch) {
    const result = await axios.get("http://localhost:3001/users", config);
    dispatch({ type: GET_USERS, payload: result.data });
    console.log(result);
  };
}

export function signUp(username, email, password) {
  return async function (dispatch) {
    try {
      const token = await axios.post("http://localhost:3001/users/signup", {
        username,
        email,
        password,
      });
      dispatch({ type: SIGNUP, payload: token.data.token });
      return "Account created";
    } catch (error) {
      if (error.response.status === 400) {
        return error.response.data;
      }
    }
  };
}

export function logIn(name, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        name,
        password,
      });
      if (response.data.token) {
        await dispatch({ type: LOGIN, payload: response.data.token });
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
    "http://localhost:3001/users/verifyadmin", config);
  return result.data.isAdmin;
}

export function updateUser(user, id) {
  return(dispatch) =>
  axios.put(`http://localhost:3001/users/${id}`, user, config)
  .then((res) => {
    dispatch({type: UPDATE_USER, payload: res.data});
  });
}

export function userBookings() {
  return async function (dispatch) {
    const bookings = await axios.get('http://localhost:3001/users/bookings', config);
    await dispatch({type: GET_BOOKINGS, payload: bookings});
    return "Bookings loaded";
  };
};