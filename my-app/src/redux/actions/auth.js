import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'



// LOAD USER 
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
      innerBackend(localStorage.token);
    }

    const res = await innerBackend.get('/users/me')

   
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
  };
    


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


export const register = ({formData}) => async dispatch  => {
// console.log(formData, 'hey')
  const form = new FormData()
  
      // form.append(
      //     'avatar',
      //     file
      //   )
  
  

  Object.keys(formData).map(el => {
      form.append(
          `${el}`, formData[el]
      )
  })

  // console.log(form.get('email '))
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