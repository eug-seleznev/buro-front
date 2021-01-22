import { innerBackend } from "../../components/utils/axios";
import { ADD_SPRINT, ADD_TASKS, ALL_PROJECTS, ALL_SPRINT,ADD_SPRINT_TO_CHOSEN, CREATE_FAIL, DELETE_PROJECT,EDIT_PROJECT, FINISH_SPRINT, FINISH_TASK, GET_PROJECT, GET_SPRINT, JOIN_TEAM, PROJECT_ID, SPRINT_ERROR, FINISH_PROJECT,ADD_INFO_SPRINT } from "../types";





export const newProject = (formData) => async dispatch  => {
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
export const editProject = (formData, id) => async dispatch  => {
    try {
        console.log('hello edit', formData)
        const res = await innerBackend.put(`/projects/${id}`, formData)
        dispatch({
            type: EDIT_PROJECT,
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
    console.log(id, 'айдишека')
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
    let body = {
        taskid: taskid 
    }
    try {
        // console.log(tasks, 'tasks', id, 'id')
        const res = await innerBackend.put(`projects/sprints/DAtask/${id}`, body)
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


export const finishSprint = (id) => async dispatch  => {
    try {
        const res = await innerBackend.put(`projects/sprints/${id}`)
        dispatch({
            type: FINISH_SPRINT,
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
export const addInfoSprint = (id, form) => async dispatch  => {
    console.log (form.description, form.date, id)
    let body = {
        description: form.description,
        date: form.date,
    }
    try {
        const res = await innerBackend.put(`projects/sprints/dd/${id}`, body)
        dispatch({
            type: ADD_INFO_SPRINT,
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

// export const addToChosen = (id) => async dispatch  => {
//     console.log ('hi sprint', id)
//     try {
//         const res = await innerBackend.put(`projects/favsprint/${id}`)
//         dispatch({
//             type: ADD_SPRINT_TO_CHOSEN,
//             payload: res.data
//         })
//         }
//       catch (err) {
//         const errors = err.response.data.errors;
//         errors.map(error => {
//            return dispatch({
//             type: SPRINT_ERROR,
//             payload: error.msg
//         })
//         })            
      
//     }

// }

export const finishProject = (id) => async dispatch  => {
   
    try {
        const res = await innerBackend.put(`projects/finish/${id}`)
        dispatch({
            type: FINISH_PROJECT,
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




export const joinTeam = (id) => async dispatch  => {

    try {

        const res = await innerBackend.put(`/projects/jointeam/${id}`)
        dispatch({
            type: JOIN_TEAM,
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