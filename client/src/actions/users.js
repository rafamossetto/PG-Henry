import axios from "axios";
export const GET_USERS = "GET_USERS";

export function getUsers() {
  return async function (dispatch) {
    const result = await axios.get("http://localhost:3001/users");
    dispatch({ type: GET_USERS, payload: result.data });
  };
}
