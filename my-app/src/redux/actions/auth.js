import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED} from '../types'
import {instance, setAuthToken} from '../../components/utils/axios'



// LOAD USER 
// export const loadUser = () => async dispatch => {
//     if (localStorage.token) {
//       innerBackend(localStorage.token);
//     }
  
   
//       dispatch({
//         type: USER_LOADED,
//       });
//   };
    


export const login = (formData) => async dispatch  => {
    try {

        const res = await instance.post('/auth', formData)
        dispatch({
            type: LOGIN,
            payload: res.data
        })
            // dispatch(loadUser())

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: AUTH_ERROR,
            payload: error.msg
        })
        })            
      
    }

}


export const register = (formData) => async dispatch  => {
    try {
        const res = await instance.post('/users', formData)
        dispatch({
            type: REGISTER,
            payload: res.data
        })
        // setAuthToken(localStorage.token);

      }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: AUTH_ERROR,
            payload: error.msg
        })
        })

        
        
            
      } 

}