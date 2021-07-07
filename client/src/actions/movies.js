
import axios from 'axios';
export const GET_MOVIES_DETAIL = 'GET_MOVIES_BY_DETAIL';

export function getMovieById(id){
    return function (dispatch) {
        return axios.get(`http://localhost:3001/movies/${id}`)
          .then(result => {
            dispatch({
                type: GET_MOVIES_DETAIL, 
                payload:result.data
              
            }); 
         }).catch(error=>{
           if(error.response?.status!== 404) alert('something wrong');
           dispatch({type:GET_MOVIES_DETAIL, payload:null})
         })
       }
  }

export function clearMovie() { //se usa en el willunmount
   return  { 
              type: GET_MOVIES_DETAIL, // va a usar el mismo reducer de la acción getMovieById
              payload: undefined
          }; 
     
  }
  