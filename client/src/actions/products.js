import axios from 'axios';
import { getTokenLocalStorage } from "../reducer/reducer";

const config = {
  headers: {
    "Access-Control-Allow-Headers": "x-access-token",
    "x-access-token": getTokenLocalStorage(),
  },
};

export function getProducts() {
      return async function(dispatch) {
        const result = await axios.get("https://movies-henry-app.herokuapp.com/products");
        dispatch({ type: GET_PRODUCTS, payload: result.data });
      };
}

export function addToTotal(price) {
  return function(dispatch) {
    dispatch({ type: ADD_TOTAL, payload: price });
  };
}

export function substractToTotal(price) {
  return function(dispatch) {
    dispatch({ type: SUBSTRACT_TOTAL, payload: price });
  };
}

export function saveSlot(slot) {
  return function(dispatch) {
    dispatch({ type: SAVE_SLOT, payload: slot });
  };
}
export function saveProduct(product) {
  return function(dispatch) {
    dispatch({ type: SAVE_PRODUCT, payload: product });
  };
}
export function deleteProduct(product) {
  return function(dispatch) {
    dispatch({ type: DELETE_PRODUCT, payload: product });
  };
}

export function sendToProducts(data) {
  return function(dispatch) {
    dispatch({ type: SEND_TO_PRODUCTS, payload: data });
  };
}
export async function postPayment(data) {
  let response = await axios.post('https://movies-henry-app.herokuapp.com/payment', data, config)
  window.location.assign(response.data)
}

export function updateStatus(data) {
  axios.put("https://movies-henry-app.herokuapp.com/users/bookings", data, config)
}

export const eraseProduct = async name => {
  const res = await axios.delete("https://movies-henry-app.herokuapp.com/products/"+name, config)
  return console.log(res.data.message)
}

export const getPrice = async extras => {
  const res = await axios.post("https://movies-henry-app.herokuapp.com/products/price", extras)
  return res.data
}

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SUBSTRACT_TOTAL = 'SUBSTRACT_TOTAL'
export const ADD_TOTAL = 'ADD_TOTAL'
export const SAVE_SLOT = 'SAVE_SLOT'
export const SAVE_PRODUCT = 'SAVE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const SEND_TO_PRODUCTS = 'SEND_TO_PRODUCTS'

