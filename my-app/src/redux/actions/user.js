import { innerBackend } from "../../components/utils/axios";
import { ALL_USERS, USER_ERR } from "../types";





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