
import { ALL_PROJECTS, CREATE_FAIL, GET_PROJECT, UPDATE_PROJECT } from '../types'



const initialState = {
    projects: null,
    project: null,
    loadProject: false,
    loaded: false,
    error: ''
    
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
       

            case ALL_PROJECTS:
                return {
                    ...state,
                    loaded: true,
                    projects: payload,
                    loadProject: false,
                    error: ''
                }

            case GET_PROJECT:
                return {
                    ...state,
                    project: payload,
                    loadProject: true,
                    error: ''
                }
            case UPDATE_PROJECT:
                return {
                    ...state,
                    loaded: true,
                    project: payload,
                    error: ''
                }
            case CREATE_FAIL:
                return {
                    ...state,
                    error: payload,
                    loadProject: false,
                    loaded: false
                }


            
            default: 
                return state;
    }

} 
