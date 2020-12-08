import Axios from "axios";
import { innerBackend } from "../../components/utils/axios";
import { ALL_TICKETS, NEW_ERROR, NEW_TICKET, GET_TICKET } from "../types";
import {url} from '../../components/utils/axios'


export const newTicket = ({formData, file}) => async dispatch  => {

     
    // formData.append('userName', 'Fred');


    try {
        // console.log(formData, 'data')
    const form = new FormData()
    if(file){
        form.append(
            'file',
            file
          )
    }
    

    Object.keys(formData).map((el, index) => {
        form.append(
            `${el}`, formData[el]
        )
    })

        console.log(form.get('file'), 'file HERE')
        console.log(form.get('text'), 'text HERE')


        const res = await Axios.post('/tickets', form, {
            baseURL: url,
            headers: {
                'content-type': 'multipart/form-data', // do not forget this 
                'auth-token': localStorage.token
               }})

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


export const allTickets = () => async dispatch  => {
    try {

        const res = await innerBackend.get('/tickets/all')
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





export const getTicket = (id) => async dispatch  => {
    try {
        console.log(id, 'my id ticket')
        const res = await innerBackend.get(`/tickets/${id}`)
        dispatch({
            type: GET_TICKET,
            payload: res.data
        })

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