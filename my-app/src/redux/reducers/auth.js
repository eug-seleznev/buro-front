
import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED} from '../types'



const initialState = {
    isAuthenticated: null,
    error: '',
    userLoaded: false
    
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case REGISTER:
        case LOGIN:
             localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                
            }
    
            case USER_LOADED:
                return {
                    ...state,
                    isAuthenticated: true,
                    userLoaded: true
                }

            case AUTH_ERROR:
                return {
                    ...state,
                    isAuthenticated: false,
                    error: payload
                }
            
            default: 
                return state;
    }

} 
