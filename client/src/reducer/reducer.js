import {GET_MOVIES_DETAIL} from '../actions/movies'
import {} from '../actions/products'
import {} from '../actions/users'

const initialState = {
    movieDetail:{}
  }

export default function reducer(state = initialState, action) {

    switch(action.type){
        case GET_MOVIES_DETAIL:
            return{
                ...state,
                movieDetail: action.payload
              }
        default:{
            return state
        }
    }
}