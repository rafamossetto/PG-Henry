import { GET_MOVIES_DETAIL } from "../actions/movies";
import { GET_PRODUCTS, ADD_TOTAL, SUBSTRACT_TOTAL } from "../actions/products";
import { GET_USERS } from "../actions/users";

const initialState = {
  products: [],
  total: 0,
  movieDetail: {},
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ADD_TOTAL: {
      return {
        ...state,
        total: state.total + action.payload,
      };
    }
    case SUBSTRACT_TOTAL: {
      return {
        ...state,
        total: state.total - action.payload,
      };
    }
    //users
    case GET_USERS: {
      // Para que en la pantalla del admin se muestren los usuarios
      return {
        ...state,
        users: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
