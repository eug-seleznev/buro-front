


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './main.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allProjects } from '../../redux/actions/projects';
// import { allUsers } from "../../redux/actions/user";

const Main = ({history}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.projects.loaded)
    const projects = useSelector(state => state.projects.projects)


   

    return (
<div className='main__container'>
    <div className='main__profile'>
        profile
    </div>
    <div className='main__projects'>
        projects
    </div>
    <div className='main__news'>
        news
    </div>
    
</div>

      )
}



export default Main