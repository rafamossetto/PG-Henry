import axios from "axios";
import { getTokenLocalStorage } from "../reducer/reducer";

const config = {
  headers: {
    "Access-Control-Allow-Headers": "x-access-token",
    "x-access-token": getTokenLocalStorage(),
  },
};

export async function validateCoupon(couponCode, date) {
  try {
    let result = await axios.post(
      "https://movies-henry-app.herokuapp.com/coupons/validate",
      { couponCode, date },
      config
    );
    return result.data.message;
  } catch (error) {
    return error.response.data.message;
  }
}
