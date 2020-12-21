import { innerBackend } from "../../components/utils/axios";
import { ALL_USERS, USER_ERR, CHANGE_PERMISSION, PERM_RETURN, ONE_USER,} from "../types";






export const allUsers = () => async dispatch  => {
    try {
        console.log('hello all users?')
        const res = await innerBackend.get('/users/all')
        dispatch({
            type: ALL_USERS,
            payload: res.data
        })
        // setAuthToken(localStorage.token);

      }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: USER_ERR,
            payload: error.msg
        })
        })
            
      } 

}
export const getUser = (id) => async dispatch  => {
  try {
      console.log('hello 1 user?')
      const res = await innerBackend.get(`/users/${id}`)
      dispatch({
          type: ONE_USER,
          payload: res.data
      })
      // setAuthToken(localStorage.token);

    }
    catch (err) {
      const errors = err.response.data.errors;
      errors.map(error => {
         return dispatch({
          type: USER_ERR,
          payload: error.msg
      })
      })
          
    } 

}
export const permissionReturn = () =>  dispatch => {
  return dispatch({
    type: PERM_RETURN,
    
  })
}

export const userPermissions = (perm, id) => async dispatch  => {
  let body = {
    permission: perm
}
  try {
      console.log('hello permissions', id, perm) 
      const res = await innerBackend.put(`/users/permchange/${id}`, body)
      dispatch({
          type: CHANGE_PERMISSION,
          payload: res.data
      })
      // setAuthToken(localStorage.token);

    }
    catch (err) {
      const errors = err.response.data.errors;
      errors.map(error => {
         return dispatch({
          type: USER_ERR,
          payload: error.msg
      })
      })
          
    } 

}
