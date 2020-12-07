import { innerBackend } from "../../components/utils/axios";
import { ALL_TICKETS, NEW_ERROR, NEW_TICKET } from "../types";



export const newTicket = (formData) => async dispatch  => {
    try {

        const res = await innerBackend.post('/tickets', formData)
        dispatch({
            type: NEW_TICKET,
            payload: res.data
        })
            // dispatch(loadUser())

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: NEW_ERROR,
            payload: error.msg
        })
        })            
      
    }

}


export const allTickets = (formData) => async dispatch  => {
    try {

        const res = await innerBackend.get('/tickets/all', formData)
        dispatch({
            type: ALL_TICKETS,
            payload: res.data
        })
        console.log(res.data, 'respond')

        }
      catch (err) {
        const errors = err.response.data.errors;
        errors.map(error => {
           return dispatch({
            type: NEW_ERROR,
            payload: error.msg
        })
        })            
      
    }

}
