import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./oneproject.css"


import { useLocation} from "react-router";
import { addSprint, getProject, allSprints, deleteProject, joinTeam, finishProject} from "../../redux/actions/projects";
import { getTicket } from "../../redux/actions/tikets";
import {Button} from '../../Styles/buttons'
import {  Redirect } from 'react-router-dom';
import { Table, Td, Tr } from "../../Styles/tables";
import { Status } from "../../Styles/project";
import { Container, Card, H1 } from "../../Styles/common";


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
        <Container>
            {!loaded ?  <p> loading...</p>: (
<div className='project__grid'>   
    {!sprintsLoad ? <p> loading...</p> :( 
<>
    <Card><H1>{project.title}</H1></Card>
    <Card>
                    
                    
                     <H1>Текущий спринт</H1>

                        {sprints.length == 0 ? <p>Спринтов нет</p> :(
                            
                            <Table >
                                
                                    <Tr columns='1fr 1fr 1fr' top>
                                        <Td> Дата </Td>
                                        <Td> Название</Td>
                                        <Td> Задачи</Td>
                                    </Tr>
                              
                                

                                {sprints.filter(sprint => !sprint.status).map((sprint, i) => {
                                        return (
                                        <Tr columns='1fr 1fr 1fr' key={i} style={{cursor:'pointer'}} title="Открыть спринт" onClick={() => history.push(`/projects/${id}/${sprint._id}`)}>
                                            <Td> {sprint.dateOpen.slice(0, 16)}</Td>
                                            <Td>спринт {i}</Td> 
                                            <Td> {sprint.tasks.filter(task => task.taskStatus).length}/{sprint.tasks.length}</Td>       
                                        </Tr>
                                            )
                                    })}

                             
                            </Table> 
                         )}
                         <br />
                         <Button onClick={createSprint} style={{display:`${user.permission==='user' || project.status?'none':'block'}`}}> {user.permission==='user'?'':'Создать спринт'}</Button><br/>






                    </Card>




                    <Card>

                            <H1 >Завершенные спринты</H1>
                        
                            {sprints.length == 0 ? <p>Завершенных спринтов нет</p> :(
                        <Table  >
                            
                                <Tr columns='1fr 1fr 1fr 1fr' top>
                                    <Td> Дата </Td>
                                    <Td> Название</Td>
                                    <Td> Задачи</Td>
                                    <Td> Статус</Td>
                                </Tr>
                           
                               

                            {sprints.filter(sprint => sprint.status).map((sprint, i) => {
                                    return (
                                    <Tr  columns='1fr 1fr 1fr 1fr' key={i}  title="Открыть спринт" onClick={() => history.push(`/projects/${id}/${sprint._id}`)}>
                                        <Td> {sprint.dateOpen.slice(0, 16)}</Td>
                                        <Td>спринт {i}</Td>
                                        <Td> {sprint.tasks.filter(task => task.taskStatus).length}/{sprint.tasks.length}</Td>
                                        <Td>{sprint.tasks.length-sprint.tasks.filter(task => task.taskStatus).length === 0 ? <Status green /> : <Status red/>}</Td>
                                    </Tr>
                            )
                         })}

                     
                     </Table>  
                         )}
                
                      

                        </Card>
                        
                        <Card>
                            <H1> Команда</H1>

                            <Table  >
                           
                                <Tr  columns='1fr 1fr 1fr' top>                              
                                    <Td >Имя</Td>
                                    <Td >email</Td>
                                    <Td >Дожность</Td>
                                </Tr>
                            
                           
      
                         {project.team.map((user, i) => {
                            return (
                             
                                <Tr columns='1fr 1fr 1fr' key={i}  title="Профиль сотрудника" onClick={() => history.push(`/users/${user.id}`)}>
                                    <Td> {user.name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.position}</Td>
                                            
                                    
                                </Tr>
                            
                     
                            )
                        })}
         
        </Table>  
      <br />
        <Button onClick={hadleTeam} style ={{display: `${project.status?'none':'block'}`}}>{project.msg===`Вы были добавлены в команду проекта ${id}`?'Выйти из команды проекта':'Вступить в команду проекта'}</Button>


    
  </Card>

                        <Card>
                            <Button onClick={handleEnd} style={{display:`${user.permission==='user'?'none':'block'}`,marginBottom: '30px'}}> {user.permission==='user'?'': project.status?'Восстановить проект':'Завершить проект'}</Button> 
                            <Button onClick={handleDelete} style={{display:`${user.permission==='user'?'none':'block'}`,marginBottom: '30px'}}> {user.permission==='user'?'':'Удалить проект'}</Button> 
                        </Card>
</>
)}
     
</div>
 
    
     )}                  
                
           
        </Container>
    )
}



export default Project