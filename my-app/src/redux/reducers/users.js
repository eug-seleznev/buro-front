
import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED, ALL_USERS, CHANGE_PERMISSION,PERM_RETURN,ONE_USER} from '../types'



const initialState = {
    user: null,
    users: [],
    loaded: false,
    msg: ''
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case ONE_USER:
            return {
                ...state,
                user: payload
                
            }
        case PERM_RETURN:
            return {
                ...state,
                loaded: false,
                
            }
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
                        msg: payload
                    }
            default: 
                return state;
    }

} 
