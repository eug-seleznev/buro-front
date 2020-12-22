
import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED} from '../types'



const initialState = {
    user: null,
    isAuthenticated: false,
    error: '',
    
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
              error: "",
              isAuthenticated: true,
            };
            case USER_LOADED:
                return {
                    
                    isAuthenticated: true,
                    user: payload
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
