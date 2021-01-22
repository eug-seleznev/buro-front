import { innerBackend } from "../../components/utils/axios";
import { NEW_PROPOSE, PROPOSE_FAIL, LIKED_PROPOSES, DATE_PROPOSES, LIKE_PROPOSE, DELETE_PROPOSE } from "../types";






export const newPropose = (formData) => async dispatch  => {
    try {

        const res = await innerBackend.post('/props', formData)
        dispatch({
            type: NEW_PROPOSE,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: PROPOSE_FAIL,
            payload: error.msg
        })
        })            
      
    }

}




export const likedProposes = () => async dispatch => {

    try {
        
        const res = await innerBackend.get(`/props/all/likes`)
        dispatch({
            type: LIKED_PROPOSES,
            payload: res.data
        })
    }
    catch (err) {
        const errors = err.response.data.errors
        errors.map(error => {
            return dispatch({
             type: PROPOSE_FAIL,
             payload: error.msg
         })
         })            
       
    }

}

export const dateProposes = () => async dispatch => {

    try {
        
        const res = await innerBackend.get(`/props/all/date`)
        dispatch({
            type: DATE_PROPOSES,
            payload: res.data
        })
    }
    catch (err) {
        const errors = err.response.data.errors
        errors.map(error => {
            return dispatch({
             type: PROPOSE_FAIL,
             payload: error.msg
         })
         })            
       
    }

}

export const likePropose = (id) => async dispatch => {

    try {
        
        const res = await innerBackend.put(`/props/like/${id}`)
        dispatch({
            type: LIKE_PROPOSE,
            payload: res.data
        })
    }
    catch (err) {
        const errors = err.response.data.errors
        errors.map(error => {
            return dispatch({
             type: PROPOSE_FAIL,
             payload: error.msg
         })
         })            
       
    }

}

export const deletePropose = (id) => async dispatch => {

    try {
        
        const res = await innerBackend.delete(`/props/${id}`)
        dispatch({
            type: DELETE_PROPOSE,
            payload: res.data
        })
    }
    catch (err) {
        const errors = err.response.data.errors
        errors.map(error => {
            return dispatch({
             type: PROPOSE_FAIL,
             payload: error.msg
         })
         })            
       
    }

}