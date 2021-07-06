import {} from '../actions/movies'
import { GET_PRODUCTS, ADD_TOTAL, SUBSTRACT_TOTAL } from '../actions/products'
import {} from '../actions/users'

const initialState = {
    products: [],
    total: 0,
    
  }

export default function reducer(state = initialState, action) {

    switch(action.type){
        case GET_PRODUCTS: {
            return{
            ...state,
            products: action.payload
            }
        }
        case ADD_TOTAL: {
            return{
            ...state,
            total: state.total + action.payload
            }
        }
        case SUBSTRACT_TOTAL: {
            return{
            ...state,
            total: state.total - action.payload
            }
        }
        default:{
            return state
        }
    }
}