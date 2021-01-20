import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from "../../redux/actions/user";
import { url } from '../utils/axios';

import { Table, Td, Tr } from "../../Styles/tables";
import { Status } from "../../Styles/project";
import { Container, Card, } from "../../Styles/common";
import { H1, H3} from '../../Styles/typography'

import './user.css'


const Employe = ({match, history}) => {
    let {id} = match.params;
    const user = useSelector(state => state.users.user)
    const loaded = useSelector(state => state.users.userLoaded)
    const dispatch = useDispatch();
 
    useEffect(()=>{
        
        dispatch(getUser(id))
        
    },[])
    
    return (
        <div>
        {!loaded? (<div>loading...</div>):
          ( <Card className='emp__grid'>
              
              <img  className='emp__logo' src={`${url}/${user.avatar}`}/>
              <H1   className='grid-p  emp__name'>Имя: {user.name}</H1>

            <div    className='grid-p  emp__position'>Должность: {user.position}</div>
            
              
                
             
              <Table className='emp__table'>
                   <H1>Проекты сотрудника</H1>
                   <br/>
                  
                    <Tr columns='1fr 1fr 1fr 1fr' top>
                      <Td>Название</Td>
                      <Td>Дата начала</Td>
                      <Td>Дедлайн</Td>
                      <Td>Статус</Td>
                  
                    </Tr>
                 
                      {user.projects.map((project,index) => {
                          return(  
                        <Tr  columns='1fr 1fr 1fr 1fr' key={index} onClick={() => history.replace(`/projects/${project.crypt}`)} title="Открыть проект">
                          
                            <Td>{project.title}</Td>
                            <Td>{project.dateStart.slice(0, 10)}</Td>
                            <Td>{project.dateFinish!==undefined?project.dateFinish.slice(0, 10):'нет'}</Td>
                            <Td>{project.status ? <p>Завершен</p>:<p>В работе</p>}</Td>
                            
                        </Tr>
                        )
                      })} 
                    
                  
                </Table>
        </Card> )
        }
        </div>
    )
}



export default Employe