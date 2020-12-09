
import { ADD_SPRINT, ALL_PROJECTS, CREATE_FAIL, GET_PROJECT, SPRINT_ERROR, ALL_SPRINT, UPDATE_PROJECT, GET_SPRINT } from '../types'



const initialState = {
    projects: null,
    project: null,
    loadProject: false,
    loaded: false,
    sprints: [],
    loadSprints: false,
    sprint: [],
    error: '',
    reload: false
    
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
                    sprint_load: false,
                    error: ''
                }

            case GET_PROJECT:
                return {
                    ...state,
                    project: payload,
                    loadProject: true,
                    sprint_load: false,

                    error: ''
                }
            case ADD_SPRINT:
                return {
                    ...state,
                    sprint: payload,
                    sprint_load: true,
                    reload: true,
                    error: ''
                }
            case ALL_SPRINT:
                return {
                    ...state,
                    sprints: payload,
                    loadSprints: true,

                    error: ''
                }
            case GET_SPRINT:
                return {
                    ...state,
                    sprint: payload,
                    reload: false,
                    loadSprints: true,
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
            case SPRINT_ERROR:
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
