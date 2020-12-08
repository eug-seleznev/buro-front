


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allProjects } from '../../redux/actions/projects';
// import { allUsers } from "../../redux/actions/user";

const Projects = ({history}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.projects.loaded)
    const projects = useSelector(state => state.projects.projects)


    useEffect(() => {
        dispatch(allProjects())
    }, [])

    return (
        <div> 
            <h1> Входящие тикеты</h1>
            {!loaded ? <p>loading...</p> : (
                <div>
                    <p> количество проектов: {projects.length} </p>
                    <table>
  <thead>
    <tr>
        <th>Номер</th>
      <th>Проблема</th>
      <th>Статус</th>
    </tr>
   </thead>
   <tbody>
       {projects.map((project,index) => {
           return(  
        <tr onClick={() => history.push(`projects/${project.crypt}`)}>
            <td>{index+1}</td>
            <td>{project.title}</td>
            <td>{project.status ? <p>ongoing</p>:<p>complete</p>}</td>
            
        </tr>
        )
       })}
     
  </tbody>
</table>
                </div>
            )}
        </div>
    )
}



export default Projects