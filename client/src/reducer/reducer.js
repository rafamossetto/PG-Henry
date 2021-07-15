import { GET_MOVIES_BY_GENRE, GET_MOVIES_DETAIL, GET_MOVIE_LIST } from "../actions/movies";
import { ORDER_USERS_BY_POINTS } from "../actions/points";
import {
  GET_PRODUCTS,
  ADD_TOTAL,
  SUBSTRACT_TOTAL,
  SAVE_SLOT,
  SAVE_PRODUCT,
  DELETE_PRODUCT,
  SEND_TO_PRODUCTS,
} from "../actions/products";
import { GET_USERS, SIGNUP, LOGIN, LOG_OUT } from "../actions/users";

const initialState = {
  products: [],
  /*   purchase:{
    parking:'',
    price:0,
    day:'',
    time:'',
    title:'',
    slot:'',
    extras:{},
    total:0
  }, */
  slot:'',
  purchase: getPurchaseLocalStorage() ? getPurchaseLocalStorage() : {},
  movieDetail: {},
  moviesGenre:[],
  users: [],
  movieList: [],
  token: getTokenLocalStorage(),
};

export function getTokenLocalStorage() {
  const token = window.localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
}

function setTokenLocalStorage(token) {
  window.localStorage.setItem("token", JSON.stringify(token));
}
export function getPurchaseLocalStorage() {
  const purchase = window.localStorage.getItem("purchase");
  return purchase ? JSON.parse(purchase) : "";
}

function setPurchaseLocalStorage(purchase) {
  window.localStorage.setItem("purchase", JSON.stringify(purchase));
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //movie list
    case GET_MOVIE_LIST: {
      return {
        ...state,
        movieList: action.payload,
      };
    }
    case GET_MOVIES_DETAIL: {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }
    case GET_MOVIES_BY_GENRE:{
      return {
      ...state,
      moviesGenre: action.payload
      }   
    };
    
    //Products
    case SEND_TO_PRODUCTS: {
      let purchase = action.payload;
      purchase.total = action.payload.price;
      purchase.extras = {};
      purchase.slot = '';
      setPurchaseLocalStorage(purchase);
      return state;
    }
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ADD_TOTAL: {
      let purchase = getPurchaseLocalStorage();
      purchase.total = purchase.total + action.payload;
      setPurchaseLocalStorage(purchase);
      return state;
    }
    case SUBSTRACT_TOTAL: {
      let purchase = getPurchaseLocalStorage();
      purchase.total = purchase.total - action.payload;
      setPurchaseLocalStorage(purchase);
      return state;
    }
    case SAVE_SLOT: {
      let purchase = getPurchaseLocalStorage();
      purchase.slot = action.payload;
      setPurchaseLocalStorage(purchase);
      return {
        ...state,
        slot: action.payload
      }
    }
    case SAVE_PRODUCT: {
      let purchase = getPurchaseLocalStorage();
      if (!purchase.extras.hasOwnProperty(action.payload)) {
        purchase.extras[action.payload] = 1;
        setPurchaseLocalStorage(purchase);
      } else {
        purchase.extras[action.payload] = purchase.extras[action.payload] + 1;
        setPurchaseLocalStorage(purchase);
      }
      return state;
    }
    case DELETE_PRODUCT: {
      let purchase = getPurchaseLocalStorage();
      if (purchase.extras[action.payload] - 1 === 0) {
        delete purchase.extras[action.payload];
        setPurchaseLocalStorage(purchase);
      } else {
        purchase.extras[action.payload] = purchase.extras[action.payload] - 1;
        setPurchaseLocalStorage(purchase);
      }
      return state;
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
    case LOG_OUT: {
      window.localStorage.removeItem("token");
      return {
        ...state,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
}
