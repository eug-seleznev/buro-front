import { innerBackend } from "../../components/utils/axios";
import { ALL_NEWS, GET_NEWS, DELETE_NEWS, UPDATE_NEWS, NEWS_FAIL, } from "../types";


export const createNews = (formData) => async dispatch  => {
    try {

        const res = await innerBackend.post('/news', formData)
        console.log('creating news')
        dispatch({
            type: GET_NEWS,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: NEWS_FAIL,
            payload: error.msg
        })
        })            
      
    }

}


export const allNews = () => async dispatch  => {
    
    try {

        const res = await innerBackend.get('/news/all')
        console.log('showing news')

        dispatch({
            type: ALL_NEWS,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: NEWS_FAIL,
            payload: error.msg
        })
        })            
      
    }

}

export const getNews = (id) => async dispatch  => {
    
    try {

        const res = await innerBackend.get(`/news/${id}`)
        dispatch({
            type: GET_NEWS,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: NEWS_FAIL,
            payload: error.msg
        })
        })            
      
    }

}

export const deleteNews = (id) => async dispatch  => {

    try {
        // console.log(tasks, 'tasks', id, 'id')
        const res = await innerBackend.delete(`news/${id}`)
        dispatch({
            type: DELETE_NEWS,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: NEWS_FAIL,
            payload: error.msg
        })
        })            
      
    }

}

export const updateNews = ({id,data}) => async dispatch  => {

    try {
        console.log(data, 'data', id, 'id')
        const res = await innerBackend.put(`news/${id}`, data)
        dispatch({
            type: UPDATE_NEWS,
            payload: res.data
        })

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: NEWS_FAIL,
            payload: error.msg
        })
        })            
      
    }

}
