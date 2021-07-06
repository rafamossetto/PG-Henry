import {} from '../actions/movies'
import { GET_PRODUCTS } from '../actions/products'
import {} from '../actions/users'

const initialState = {
    products: [],
  }

export default function reducer(state = initialState, action) {

    switch(action.type){
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