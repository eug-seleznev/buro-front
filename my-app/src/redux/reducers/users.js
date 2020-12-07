
import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED, ALL_USERS} from '../types'



const initialState = {
    users: [],
    loaded: false
    
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
       

            case ALL_USERS:
                return {
                    ...state,
                    loaded: true,
                    users: payload
                }
            
            default: 
                return state;
    }

} 
