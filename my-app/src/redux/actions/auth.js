import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED,CHANGE_AVATAR, CHANGE_USERDATA, CHANGE_LOADED, ADD_SPRINT_TO_CHOSEN, SPRINT_ERROR} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'



// LOAD USER 
export const loadUser = () => async dispatch => {
  try {
    
     
     const res = await innerBackend.get("/users/me");

     console.log(res, "/response???");
    
     dispatch({
       type: USER_LOADED,
       payload: res.data,
     });
  } catch (err) {
    console.log(err.response.data, 'ERROR!!!')
  }
   
  };
    


export const login = (formData) => async dispatch  => {
    try {
      console.log(formData, 'data?')
        const res = await instance.post('/auth', formData)
        console.log(res, 'respond')
        dispatch({
            type: LOGIN,
            payload: res.data
        })
                  setAuthToken(res.data.token);
                  setTimeout(() =>loadUser(),200)
                  

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
        console.log(res.data, "DATA FROM REGISTRATION");
        dispatch({
            type: REGISTER,
            payload: res.data
        })
         setAuthToken(localStorage.token);
        
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
          type: AUTH_ERROR,
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
          type: AUTH_ERROR,
          payload: error.msg
      })
      })
          
    } 

}


export const addToChosen = (id) => async dispatch  => {
  console.log ('hi sprint', id)
  try {
      const res = await innerBackend.put(`projects/favsprint/${id}`)
      dispatch({
          type: ADD_SPRINT_TO_CHOSEN,
          payload: res.data
      })
      }
    catch (err) {
      const errors = err.response.data.errors;
      errors.map(error => {
         return dispatch({
          type: SPRINT_ERROR,
          payload: error.msg
      })
      })            
    
  }

}


export const changeLoaded = () =>  dispatch => {
  return dispatch({
    type: CHANGE_LOADED,
    
  })
}
