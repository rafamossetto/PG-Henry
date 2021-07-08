import { GET_MOVIES_DETAIL, GET_MOVIE_LIST } from "../actions/movies";
import { ORDER_USERS_BY_POINTS } from "../actions/points";
import { GET_PRODUCTS, ADD_TOTAL, SUBSTRACT_TOTAL, SAVE_SLOT, SAVE_PRODUCT, DELETE_PRODUCT, SEND_TO_PRODUCTS } from "../actions/products";
import { GET_USERS, SIGNUP, LOGIN } from "../actions/users";


const initialState = {
  products: [],
  purchase:{
    parking:'',
    slot:'',    
    day:'',
    time:'',
    title:'',
    extras:{},
    total:0
  },
  movieDetail: {},
  users: [],
  token: getTokenLocalStorage(),
};

export function getTokenLocalStorage() {
  const token = window.localStorage.getItem("token");
  return token ? JSON.parse(token) : {};
}

function setTokenLocalStorage(token) {
  window.localStorage.setItem("token", JSON.stringify(token));
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //movie list
    case GET_MOVIE_LIST: {
      return {
        ...state,
        movieList: action.payload,
      }
    }
    case GET_MOVIES_DETAIL: {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }
    case SEND_TO_PRODUCTS: {
      return {
        ...state,
        purchase:{
          ...state.purchase,
          parking:action.payload.parking,
          day:action.payload.day,
          time:action.payload.time,
          title:action.payload.title,
        }
      };
    }
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ADD_TOTAL: {
      return {
        ...state,
        purchase:{
          ...state.purchase,
          total: state.purchase.total + action.payload,
        } 
      };
    }
    case SUBSTRACT_TOTAL: {
      return {
        ...state,
        purchase:{
          ...state.purchase,
          total: state.purchase.total - action.payload,
        } 
      };
    }
    case SAVE_SLOT: {
      return {
        ...state,
        purchase:{
          ...state.purchase,
          slot: action.payload,
        } 
      };
    }
    case SAVE_PRODUCT: {
      if(!state.purchase.extras.hasOwnProperty(action.payload)){
        state.purchase.extras[action.payload]=1;
        return state
      }
      else{
        return {
          ...state,
          purchase:{
            ...state.purchase,
            extras: {
              ...state.purchase.extras,
              [action.payload]: state.purchase.extras[action.payload] +1,
              }
          } 
        };
      }
    }
    case DELETE_PRODUCT: {
      if(state.purchase.extras[action.payload] - 1 === 0){
        delete state.purchase.extras[action.payload]
        return state;
      }
      else{
        return {
          ...state,
          purchase:{
            ...state.purchase,
            extras: {
              ...state.purchase.extras,
              [action.payload]: state.purchase.extras[action.payload] -1,
              }
          } 
        };
      }
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
          users: [...state.users].sort((a, b) => a - b),
        };
      }
      return {
        ...state,
        users: [...state.users].sort((a, b) => a + b),
      };
    }
    //authentication
    case LOGIN: {
      setTokenLocalStorage(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }
    case SIGNUP: {
      setTokenLocalStorage(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
