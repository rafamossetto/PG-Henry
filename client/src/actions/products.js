import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SUBSTRACT_TOTAL = 'SUBSTRACT_TOTAL';
export const ADD_TOTAL = 'ADD_TOTAL';

export function getProducts() {
      return async function(dispatch) {
        const result = await axios.get("http://localhost:3001/products");
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