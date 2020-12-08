
import axios from 'axios'


export const url = 'http://195.2.71.115:7070'





export const setAuthToken = (token) => {
    console.log(token, 'token')

    if(token){
        innerBackend.defaults.headers.common['auth-token'] = token;
    } else {
        delete innerBackend.defaults.headers.common['auth-token'];
    }
}




export const innerBackend = axios.create ({
        baseURL: url,
        headers: {
            accept: 'application/json',
            'auth-token': localStorage.token
        
        }
       
    })





export const instance = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
      }})



