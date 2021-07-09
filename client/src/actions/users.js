import axios from "axios";
import { getTokenLocalStorage } from "../reducer/reducer";
export const GET_USERS = "GET_USERS";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

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
    const token = await axios.post("http://localhost:3001/users/signup", {
      username,
      email,
      password,
    });
    dispatch({ type: SIGNUP, payload: token.data.token });
  };
}

export function logIn(name, password) {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/users/login", {
      name,
      password,
    });
    //console.log(response.data)
    dispatch({ type: LOGIN, payload: response.data });
  };
}

export async function isAdmin() {
  const result = await axios.get(
    "http://localhost:3001/users/verifyadmin",
    config
  );
  console.log(result.data.isAdmin);
  return result.data.isAdmin;
}
