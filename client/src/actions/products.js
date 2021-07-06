import axios from 'axios'

export function getProduct() {
      return async function(dispatch) {
        const result = await axios.get("ruta de productos");
        dispatch({ type: GET_PRODUCTS, payload: result.data });
      };
}

export const GET_PRODUCTS = 'GET_PRODUCTS'