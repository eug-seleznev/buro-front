
import axios from 'axios'


//export const url = "http://185.231.153.99:7070";
export const url = "https://bd.buro82.ru";




export const setAuthToken = (token) => {
    console.log(token, 'token')

    if(token){
        innerBackend.defaults.headers.common['auth-token'] = token;
    } 
}




export const innerBackend = axios.create ({
        baseURL: url,
        headers: {
            accept: 'application/json',
        
        }
       
    })





export const instance = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
      }})



