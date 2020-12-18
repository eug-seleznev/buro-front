


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './projects.css'
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
        <div className="main__allproj"> 
            <h1> Все проекты</h1>
            {!loaded ? <p>loading...</p> : (
                <div>
                    <p> количество проектов: {projects.length} </p>
                    <table className="table__allproj" >
  <thead>
    <tr>
        
      <th>Название</th>
      <th>Дата начала</th>
      <th>Дедлайн</th>
      <th>Статус</th>
      <th>Спринты</th>
    </tr>
   </thead>
   <tbody>
       {projects.map((project,index) => {
           return(  
        <tr key={index} onClick={() => history.replace(`/projects/${project.crypt}`)} title="Открыть проект">
           
            <td>{project.title}</td>
            <td>{project.dateStart.slice(0, 10)}</td>
            <td>{project.dateFinish!==undefined?project.dateFinish.slice(0, 10):'нет'}</td>
            <td>{project.status ? <p>Завершен</p>:<p>В работе</p>}</td>
            <td>{project.sprints.filter(sprint => sprint.status).length}/{project.sprints.length}</td>
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