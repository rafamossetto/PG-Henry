
import {GET_MOVIES_DETAIL} from '../actions/movies'
import { GET_PRODUCTS } from '../actions/products'
import {} from '../actions/users'

const initialState = {
    movieDetail:{},
    products: []
  }

export default function reducer(state = initialState, action) {

    switch(action.type){
        case GET_MOVIES_DETAIL:
            return{
                ...state,
                movieDetail: action.payload
              }
        case GET_PRODUCTS: {
            return{
            ...state,
            products: action.payload
            }
        }
        default:{
            return state
        }
    }
}