
import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED, ALL_USERS, CHANGE_PERMISSION} from '../types'



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
                case CHANGE_PERMISSION:
                    return {
                        ...state,
                        loaded: true,
                        users: payload
                    }
            default: 
                return state;
    }

} 
