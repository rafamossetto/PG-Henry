import axios from "axios";
import { getTokenLocalStorage } from "../reducer/reducer";

export const GET_MOVIES_DETAIL = "GET_MOVIES_BY_DETAIL";
export const GET_MOVIE_LIST = "GET_MOVIE_LIST";

const config = {
  headers: {
    "Access-Control-Allow-Headers": "x-access-token",
    "x-access-token": getTokenLocalStorage(),
  },
};

export function getMovieById(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/movies/${id}`)
      .then((result) => {
        dispatch({
          type: GET_MOVIES_DETAIL,
          payload: result.data,
        });
      })
      .catch((error) => {
        if (error.response?.status !== 404) alert("something wrong");
        dispatch({ type: GET_MOVIES_DETAIL, payload: null });
      });
  };
}

export function getMovieList() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/movies").then((result) => {
      dispatch({
        type: GET_MOVIE_LIST,
        payload: result.data,
      });
    });
  };
}

export function clearMovie() {
  //se usa en el willunmount
  return {
    type: GET_MOVIES_DETAIL, // va a usar el mismo reducer de la acción getMovieById
    payload: undefined,
  };
}

export function postMovie(movie) {
  axios.post("http://localhost:3001/movies", movie, config);
}

export function updateMovie(movie, id) {
  axios.put(`http://localhost:3001/movies/${id}`, movie, config);
}
