import { innerBackend } from "../../components/utils/axios";
import { ALL_PROJECTS, CREATE_FAIL, GET_PROJECT, PROJECT_ID } from "../types";





export const newProject = (formData) => async dispatch  => {
    console.log(formData)
    try {

        const res = await innerBackend.post('/projects/add', formData)
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: CREATE_FAIL,
            payload: error.msg
        })
        })            
      
    }

}


export const allProjects = () => async dispatch  => {
    
    try {

        const res = await innerBackend.get('/projects')
        dispatch({
            type: ALL_PROJECTS,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: CREATE_FAIL,
            payload: error.msg
        })
        })            
      
    }

}


export const getProject = (id) => async dispatch  => {
    
    try {

        const res = await innerBackend.get(`/projects/${id}`)
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: CREATE_FAIL,
            payload: error.msg
        })
        })            
      
    }

}