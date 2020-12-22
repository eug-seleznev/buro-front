
import {REGISTER, AUTH_ERROR, LOGIN, USER_LOADED, ALL_USERS, CHANGE_PERMISSION,PERM_RETURN,ONE_USER, CHANGE_USERDATA, CHANGE_AVATAR} from '../types'



const initialState = {
    user: null,
    users: [],
    loaded: false,
    msg: '',
    userLoaded: false
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case ONE_USER:
            return {
                ...state,
                user: payload,
                userLoaded: true
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
