import { innerBackend } from "../../components/utils/axios";
import { ALL_USERS, USER_ERR, CHANGE_PERMISSION, PERM_RETURN, ONE_USER,CHANGE_USERDATA, CHANGE_AVATAR } from "../types";






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
export const changeData = (formData) => async dispatch  => {
  /////////////////////////
  // let body ={
  //   name: formData.name,
  //   email: formData.email,
  //   position: formData.position,
    
  // }
  //////////////////////
  try {
      console.log('hello change', formData)
      const res = await innerBackend.put(`/users/me`, formData)
      dispatch({
          type: CHANGE_USERDATA,
          payload: res.data
      })
  

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
export const changeAvatar = (file) => async dispatch  => {


  try {
  
  const form = new FormData()
  if(file){
      form.append(
          'file',
          file
        )
  }
  

      console.log(form.get('file'), 'file HERE')
   


      const res = await innerBackend.put(`/users/me/a`, form)
      dispatch({
          type: CHANGE_AVATAR,
          payload: res.data
      })
  

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
