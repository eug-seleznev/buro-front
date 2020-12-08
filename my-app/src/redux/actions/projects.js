import { innerBackend } from "../../components/utils/axios";
import { CREATE_FAIL, GET_PROJECT } from "../types";





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