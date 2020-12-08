import { combineReducers } from 'redux';
import auth from './auth'
import tickets from './tickets'
import users from './users'
import projects from './projects'



export default combineReducers({
    users,
    auth,
    tickets,
    projects

});