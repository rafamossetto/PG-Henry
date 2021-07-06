import {} from '../actions/movies'
import {} from '../actions/products'
import {} from '../actions/users'

const initialState = {
    dinos: undefined,
    img: undefined
  }

export default function reducer(state = initialState, action) {

    switch(action.type){
        default:{
            return state
        }
    }
}