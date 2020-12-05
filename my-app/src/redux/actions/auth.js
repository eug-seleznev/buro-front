import {GET_TOKEN} from '../type'





export const getToken = (token) => {
    return {
        type: GET_TOKEN,
        payload: token 
    }

}