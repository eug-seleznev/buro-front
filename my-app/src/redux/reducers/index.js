import { combineReducers } from 'redux';
import auth from './auth'
import tickets from './tickets'
import users from './users'



export default combineReducers({
    users,
    auth,
    tickets

});