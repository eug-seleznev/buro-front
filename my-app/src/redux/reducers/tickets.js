import { ALL_TICKETS, NEW_ERROR, NEW_TICKET } from "../types";




const initialState = {
    tikets: [],
    error: '',
    loaded: false
    
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case NEW_TICKET:
            return {
                ...state,
                error: ''
                
                
            }
        case ALL_TICKETS:
            return {
                ...state,
                error: '',
                tickets: payload
                
                
            }
        case NEW_ERROR:
            return {
                ...state,
                error: payload,
                
                
                
            }
            default: 
                return state;
        }
    }