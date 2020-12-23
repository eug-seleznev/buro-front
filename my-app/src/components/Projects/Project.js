import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./oneproject.css"


import { useLocation} from "react-router";
import { addSprint, getProject, allSprints, deleteProject, joinTeam, finishProject} from "../../redux/actions/projects";
import { getTicket } from "../../redux/actions/tikets";
import {Button} from '../../Styles/buttons'
import {  Redirect } from 'react-router-dom';
import { Table } from "../../Styles/tabel";
import { Container, Flex, Title, Item, Status } from "../../Styles/layout";


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
        console.log(sprint,'sritttttttttttttttttttttttttt')
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
    const handleEnd = () => {
        
        dispatch(finishProject(id))
        return history.push(`.`)

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
        <Container  >
            {!loaded && !sprintsLoad ? <p> loading...</p>: (
<Flex>   
    <Item>
                    <Title>{project.title}</Title>
                    
                     <div style={{filter: 'drop-shadow(0 0 5px black)', backgroundColor:'white', paddingLeft:'20px'}}>
                     <Title>Текущий спринт</Title>

                        {sprints.length == 0 ? <p>Спринтов нет</p> :(
                            
                            <Table  >
                                <thead>
                                    <tr>
                                        <th> Дата </th>
                                        <th> Название</th>
                                        <th> Задачи</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                

                                {sprints.filter(sprint => !sprint.status).map((sprint, i) => {
                                        return (
                                    
                                        <tr key={i} style={{cursor:'pointer'}} title="Открыть спринт" onClick={() => history.push(`/projects/${id}/${sprint._id}`)}>
                                            <td> {sprint.dateOpen.slice(0, 16)}</td>
                                            <td>спринт {i}</td> 
                                            <td> {sprint.tasks.filter(task => task.taskStatus).length}/{sprint.tasks.length}</td>       
                                        </tr>
                                            )
                                    })}

                                </tbody>
                            </Table> 
                         )}
                         <br />
                         <Button onClick={createSprint} style={{display:`${user.permission==='user' || project.status?'none':'block'}`}}> {user.permission==='user'?'':'Создать спринт'}</Button><br/>

                    </div>





                    </Item>




                    <Item>

                        <div style={{
                            filter: 'drop-shadow(0 0 5px black)', backgroundColor:'white'}}>
                            <Title >Завершенные спринты</Title>
                        
                            {sprints.length == 0 ? <p>Завершенных спринтов нет</p> :(
                        <Table  >
                            <thead>
                                <tr>
                                    <th> Дата </th>
                                    <th> Название</th>
                                    <th> Задачи</th>
                                    <th> Статус</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                               

                            {sprints.filter(sprint => sprint.status).map((sprint, i) => {
                                    return (
                                    <tr key={i} style={{cursor:'pointer'}} title="Открыть спринт" onClick={() => history.push(`/projects/${id}/${sprint._id}`)}>
                                        <td> {sprint.dateOpen.slice(0, 16)}</td>
                                        <td>спринт {i}</td> 
                                        <td> {sprint.tasks.filter(task => task.taskStatus).length}/{sprint.tasks.length}</td>  
                                        <td>{sprint.tasks.length-sprint.tasks.filter(task => task.taskStatus).length === 0 ? <Status green /> : <Status red/>}</td>
                                    </tr>
                            )
                         })}

                        </tbody>
                     </Table>  
                         )}
                
                         <br />

                        </div>
                        </Item>
                        
                        <Item>
                             <div style={{ filter: 'drop-shadow(0 0 5px black)', backgroundColor:'white', paddingLeft:'20px', paddingBottom:'20px'}}>
                            <Title> Команда</Title>

                            <Table  >
                            <thead>
                                <tr>                              
                                    <th >Имя</th>
                                    <th >email</th>
                                    <th >Дожность</th>
                                </tr>
                            </thead>
                            <tbody >
      
                         {project.team.map((user, i) => {
                            return (
                             
                                <tr key={i} style={{cursor:'pointer'}} title="Профиль сотрудника" onClick={() => history.push(`/users/${user.id}`)}>
                                    <td> {user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.position}</td>
                                            
                                    
                                </tr>
                            
                     
                            )
                        })}
         
        
   
     
            </tbody> 
        </Table>  
        <br />
        <Button onClick={hadleTeam} style ={{display: `${project.status?'none':'block'}`}}>{project.msg===`Вы были добавлены в команду проекта ${id}`?'Выйти из команды проекта':'Вступить в команду проекта'}</Button>

    </div>
    
  </Item>

                          <br/>
                            <br />
                            <Button onClick={handleEnd} style={{display:`${user.permission==='user'?'none':'block'}`,marginBottom: '30px'}}> {user.permission==='user'?'': project.status?'Восстановить проект':'Завершить проект'}</Button> 
                            <Button onClick={handleDelete} style={{display:`${user.permission==='user'?'none':'block'}`,marginBottom: '30px'}}> {user.permission==='user'?'':'Удалить проект'}</Button> 



                
                    </Flex>
 
                
                
            )}
        </Container>
    )
}



export default Project