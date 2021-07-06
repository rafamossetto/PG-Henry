<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 6470e41cab4246fddf997183b39d09ee7a67015d
import axios from 'axios'

export function getProducts() {
      return async function(dispatch) {
<<<<<<< HEAD
        const result = await axios.get("http://localhost:3001/products");
=======
        const result = await axios.get("ruta de productos");
>>>>>>> 6470e41cab4246fddf997183b39d09ee7a67015d
        dispatch({ type: GET_PRODUCTS, payload: result.data });
      };
}

<<<<<<< HEAD
export const GET_PRODUCTS = 'GET_PRODUCTS'
>>>>>>> Stashed changes
=======
export const GET_PRODUCTS = 'GET_PRODUCTS'
>>>>>>> 6470e41cab4246fddf997183b39d09ee7a67015d
