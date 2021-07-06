import fetch from 'node-fetch';
export const GET_MOVIES_DETAIL = 'GET_MOVIES_BY_DETAIL';

export function getMovieById(id) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/???/${id}`)
        .then(response => response.json())
          .then(json => {
            dispatch({
                type: GET_MOVIES_DETAIL, 
                payload:json
              
            }); 
         }).catch(error=>{
           if(error.response?.status!== 404) alert('Algo salió Mal');
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
  