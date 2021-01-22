


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './projects.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allProjects } from '../../redux/actions/projects';


import { loadUser } from '../../redux/actions/auth';
// import { allUsers } from "../../redux/actions/user";
import { Table, Tr, Td } from '../../Styles/tables';
import { Container, Card, } from '../../Styles/common'
import { H1, H3} from '../../Styles/typography'





const Projects = ({history}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.projects.loadedAllProj)
    const projects = useSelector(state => state.projects.projects)


    useEffect(() => {
        
        
    }, [])
    useEffect (()=>{
        if (!loaded){
           dispatch(allProjects()) 
        }
        
    },[loaded])
    return (
    <div>

       
            {!loaded ? <p>loading...</p> : (
                <div className='projects__grid'>
<Card>
            <H1> Проекты в работе</H1>
                    <p> количество проектов: {projects.length} </p>
                    <Table>
  
    <Tr columns='1fr 1fr 1fr 1fr 1fr' top='top'>
 
      <Td>Название</Td>
      <Td>Дата начала</Td>
      <Td>Дедлайн</Td>
      <Td>Статус</Td>
      <Td>Спринты</Td>

    </Tr>
   
   
       {projects.filter(project => !project.status).map((project,index) => {
           return(  
        <Tr columns='1fr 1fr 1fr 1fr 1fr' key={index} onClick={() => history.replace(`/projects/${project.crypt}`)} title="Открыть проект">
           
            <Td>{project.title}</Td>
            <Td>{project.dateStart.slice(0, 10)}</Td>
            <Td>{project.dateFinish!==undefined?project.dateFinish.slice(0, 10):'нет'}</Td>
            <Td>{project.status ? <p>Завершен</p>:<p>В работе</p>}</Td>
            <Td>{project.sprints.filter(sprint => sprint.status).length}/{project.sprints.length}</Td>
        </Tr>
        )
       })}
     
  
</Table>
</Card>


<Card>
           

<H1 > Завершенные проекты</H1>


<Table>
  
    <Tr columns='1fr 1fr 1fr 1fr 1fr' top='top'>
        
      <Td>Название</Td>
      <Td>Дата начала</Td>
      <Td>Дедлайн</Td>
      <Td>Статус</Td>
      <Td>Спринты</Td>
    </Tr>
 
       {projects.filter(project => project.status).map((project,index) => {
           return(  
        <Tr columns='1fr 1fr 1fr 1fr 1fr' key={index} onClick={() => history.replace(`/projects/${project.crypt}`)} title="Открыть проект">
         
            <Td>{project.title}</Td>
            <Td>{project.dateStart.slice(0, 10)}</Td>
            <Td>{project.dateFinish!==undefined?project.dateFinish.slice(0, 10):'нет'}</Td>
            <Td>{project.status ? <p>Завершен</p>:<p>В работе</p>}</Td>
            <Td>{project.sprints.filter(sprint => sprint.status).length}/{project.sprints.length}</Td>
        </Tr>
        )
       })}
     
 
    </Table>
</Card>
                </div>
            )}
        </div>
    )
}



export default Projects