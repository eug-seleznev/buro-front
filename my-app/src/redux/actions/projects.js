import { innerBackend } from "../../components/utils/axios";
import { ADD_SPRINT, ADD_TASKS, ALL_PROJECTS, ALL_SPRINT, CREATE_FAIL, DELETE_PROJECT, FINISH_TASK, GET_PROJECT, GET_SPRINT, PROJECT_ID, SPRINT_ERROR } from "../types";





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


export const addSprint = (id) => async dispatch  => {
    try {
        console.log(id, 'id');

        const res = await innerBackend.post(`/projects/sprints/new/${id}`)
        dispatch({
            type: ADD_SPRINT,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: SPRINT_ERROR,
            payload: error.msg
        })
        })            
      
    }

}


export const allSprints = (id) => async dispatch  => {
    try {

        const res = await innerBackend.get(`/projects/sprints/${id}`)
        dispatch({
            type: ALL_SPRINT,
            payload: res.data.sprints
        })
        console.log(res.data, 'my data')

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: SPRINT_ERROR,
            payload: error.msg
        })
        })            
      
    }

}



export const getSprint = (id) => async dispatch  => {
    try {
        const res = await innerBackend.get(`/projects/getsprint/${id}`)
        dispatch({
            type: GET_SPRINT,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: SPRINT_ERROR,
            payload: error.msg
        })
        })            
      
    }

}



export const addTasks = ({tasks, id}) => async dispatch  => {
    console.log(tasks, 'id')

    try {
        // console.log(tasks, 'tasks', id, 'id')
        const res = await innerBackend.post(`/projects/sprints/addtask/${id}`, tasks)
        dispatch({
            type: ADD_TASKS,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: SPRINT_ERROR,
            payload: error.msg
        })
        })            
      
    }

}



export const finishTask = ({taskid, id}) => async dispatch  => {

    try {
        // console.log(tasks, 'tasks', id, 'id')
        const res = await innerBackend.put(`projects/sprints/DAtask/${id}`, taskid)
        dispatch({
            type: FINISH_TASK,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: SPRINT_ERROR,
            payload: error.msg
        })
        })            
      
    }

}





export const deleteProject = (crypt) => async dispatch  => {

    try {
        // console.log(tasks, 'tasks', id, 'id')
        const res = await innerBackend.delete(`projects/${crypt}`)
        dispatch({
            type: DELETE_PROJECT,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: SPRINT_ERROR,
            payload: error.msg
        })
        })            
      
    }

}
