
import {GET_TOKEN} from '../type'



const initialState = {
    token: '',
    isAuthenticated: null,
    
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case GET_TOKEN:
            return {
                ...state,
                isAuthenticated: true,
                token: payload,
            }
            
            default: 
                return state;
    }

} 
