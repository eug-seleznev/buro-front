import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./oneproject.css"


import { useLocation} from "react-router";
import { addSprint, getProject, allSprints, deleteProject, joinTeam } from "../../redux/actions/projects";
import { getTicket } from "../../redux/actions/tikets";

import {  Redirect } from 'react-router-dom';


const Project = ({match, history}) => {
    let {id} = match.params;
    const dispatch = useDispatch();
    const loaded = useSelector(state => state.projects.loadProject);
    const sprintsLoad = useSelector(state => state.projects.loadSprints)

    const sprintLoad = useSelector(state => state.projects.sprint_load)
    const reload = useSelector(state => state.projects.reload)
    const user = useSelector(state => state.auth.user)

    const sprint = useSelector(state => state.projects.sprint)
    const users = useSelector(state => state.users.users)
    const project = useSelector(state => state.projects.project)
    const sprints = useSelector(state => state.projects.sprints)
    // const project = useSelector(state => state.projects.project.team)

    useEffect(() => {
        dispatch(getProject(id));
    }, [])


    useEffect(() => {
        if(loaded){
            dispatch(allSprints(project.crypt))
        }
    }, [loaded])

    useEffect(() => {
        if(reload){
            return history.push(`${id}/${sprint.id}`)
        }
    }, [reload])

    const createSprint = () => {
        dispatch(addSprint(project.crypt))
    }

    const handleDelete = () => {
        dispatch(deleteProject(id))
        return history.push(`./`)

    }
    const hadleTeam = () => {
       console.log  (project.msg)
        dispatch(joinTeam(id))
    }

    return (
        <div >
            {!loaded ? <p> loading...</p>: (
                <div  className="one__proj__main">
                    <h1>{project.title}</h1>

                    <br>
                    </br>
                    <button onClick={createSprint} style={{display:`${user.permission==='user'?'none':'block'}`}}> {user.permission==='user'?'':'Создать спринт'}</button>
                    
                    {!sprintsLoad ? <p> loading..</p> : (
                        <div>
                           <table>
<tbody>
    <tr>
        <td></td>
        <td>В работе</td>
        <td>Готово</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
                            <thead>
    <tr>
        
      <th >В работе</th>
      <th  ></th>
      <th >Готово</th>
    </tr>
   
        
      <tr  >Дата создания</tr>
      <tr  >Задачи</tr>                 
      <tr  >Статус</tr>   
   
   <tbody>
      
       {sprints.filter(sprint => !sprint.status).map((sprint, i) => {

                        
                            return (
                                <tr>
                                <tr key={i} style={{cursor:'pointer'}} title="Открыть спринт" onClick={() => history.push(`/projects/${id}/${sprint._id}`)}> </tr>
                            <th>
                                Дата создания: {sprint.dateOpen.slice(0, 16)} |
                                <tr>Задачи:  
                                {sprint.tasks.filter(task => task.taskStatus).length}/
                                {sprint.tasks.length}</tr>  | 
                                <tr>{ 'Статус: В работе'}</tr>
                                
                            </th>
                       </tr>
                            )
                        })}
        
        )
   
     
  </tbody> </table>  
                        <h3> Текущие спринты: </h3>

                        

                            <br />
                            <h3> Завершенные спринты</h3>

                        {sprints.filter(sprint => sprint.status).map((sprint, i) => {

        
                        return (
                            <div key={i} style={{cursor:'pointer'}} title="Открыть спринт" onClick={() => history.push(`${id}/${sprint._id}`)}>
                        <p>
                        Дата создания: {sprint.dateOpen.slice(0, 16)} | Задачи: 
                            {sprint.tasks.filter(task => task.taskStatus).length}
                              выполнено из {sprint.tasks.length} 
                            {sprint.tasks.length - sprint.tasks.filter(task => task.taskStatus).length ===0 ?
                                <div style={{width:"10vw", height: "5px", backgroundColor:"green"}}></div>:(
                                    <div style={{width:"10vw", height: "5px", backgroundColor:"red"}}></div>

                                )
                                                    }
                        </p>
                        </div>
                        )
                        })}
                        <br />
                        <div >
                            <h3>Команда проекта:</h3>
                            <div className="team__name">
                                <div >Имя</div>
                                 <div className="team__desc">Должность</div>
                            </div>
                            <p> {project.team.map(( el, index) => {
return (
    <div className="team__part">
        <div >{el.name}</div>
        <div className="team__desc">{el.position}</div>
    </div>
)
})} </p>
                            <button onClick={hadleTeam}>{project.msg===`Вы были добавлены в команду проекта ${id}`?'Выйти из команды проекта':'Вступить в команду проекта'}</button>
                        </div>
                            <br />
                        <button onClick={handleDelete} style={{marginBottom: '30px'}}> Удалить проект</button> 



                        </div>
                    )}
                    
                </div>
                
            )}
        </div>
    )
}



export default Project