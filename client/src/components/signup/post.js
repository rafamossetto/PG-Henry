import axios from 'axios';

export async function post(info){
    try{
      const response=await axios({
          url:'https://movies-henry-app.herokuapp.com/users/signup',
          method: 'POST',
          data: info,
      })
      console.log(response)
      return response
    } catch(error){
     console.log(error)
    }
}