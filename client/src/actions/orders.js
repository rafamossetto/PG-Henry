import axios from "axios";
import { getTokenLocalStorage } from "../reducer/reducer";
export const GET_PAYMENTS = "GET_PAYMENTS";

const config = {
  headers: {
    "Access-Control-Allow-Headers": "x-access-token",
    "x-access-token": getTokenLocalStorage(),
  },
};

export function getPayments() {
  return async function (dispatch) {
    try {
      let payments = await axios.get("https://movies-henry-app.herokuapp.com/payment", config);

      dispatch({ type: GET_PAYMENTS, payload: payments.data });
    } catch (error) {}
  };
}
