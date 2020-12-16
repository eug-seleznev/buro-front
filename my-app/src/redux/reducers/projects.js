
import { ADD_SPRINT, ALL_PROJECTS, CREATE_FAIL, GET_PROJECT, SPRINT_ERROR, ALL_SPRINT, UPDATE_PROJECT, GET_SPRINT, ADD_TASKS, FINISH_TASK, DELETE_PROJECT, FINISH_SPRINT, JOIN_TEAM } from '../types'



const initialState = {
    projects: null,
    project: null,
    loadProject: false,
    loaded: false,
    sprints: [],
    loadSprints: false,
    sprint: [],
    tasks: [],
    tasksLoad: false,
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

                case ADD_TASKS:
                return {
                    ...state,
                    tasks: payload,
                    error: ''
                }
                case JOIN_TEAM:
                    return {
                        ...state,
                        project: payload,
                        msg: payload.msg,
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
                    loadProject: false,

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

            case FINISH_SPRINT:
                return {
                    ...state,
                    msg: payload,
                    error: ''
                }
            case CREATE_FAIL:
                return {
                    ...state,
                    error: payload,
                    loadProject: false,
                    loaded: false
                }
                case FINISH_TASK:
                    return {
                    ...state,
                    hey: payload
                }   
            case SPRINT_ERROR:
                return {
                    ...state,
                    error: payload,
                    loadProject: false,
                    loaded: false
                }
            case DELETE_PROJECT: 
                return {
                    ...state,
                    msg: payload
                }


            
            default: 
                return state;
    }

} 
