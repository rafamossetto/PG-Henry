import axios from 'axios'

export function getProducts() {
      return async function(dispatch) {
        const result = await axios.get("http://localhost:3001/products");
        dispatch({ type: GET_PRODUCTS, payload: result.data });
      };
}

export const GET_PRODUCTS = 'GET_PRODUCTS'