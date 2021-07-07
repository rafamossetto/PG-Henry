import { GET_MOVIES_DETAIL } from "../actions/movies";
import { ORDER_USERS_BY_POINTS } from "../actions/points";
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
    // Ordenar usuarios por cantidad de puntos asc/desc
    case ORDER_USERS_BY_POINTS: {
      //Si no hay payload, order desc
      if (!action.payload) {
        return {
          ...state,
          users: [...state.users].sort((a, b) => a - b)
        }
      }
      return {
        ...state,
        users: [...state.users].sort((a, b) => a + b)
      }
    }
    default: {
      return state;
    }
  }
}
