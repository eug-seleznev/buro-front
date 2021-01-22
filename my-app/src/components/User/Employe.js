import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from "../../redux/actions/user";
import { url } from '../utils/axios';
import styles from '../../Styles/modules/main/main.module.css'

import { Table, Td, Tr } from "../../Styles/tables";
import { Status } from "../../Styles/project";
import { Container, Card, } from "../../Styles/common";
import { Bold } from '../../Styles/typography'

import  ProfileComponent  from '../Main/profileComponent'
import ProjectsCard from '../Main/projectsCard'

import './user.css'


const Employe = ({match, history}) => {
    let {id} = match.params;
    const user = useSelector(state => state.users.user)
    const loaded = useSelector(state => state.users.userLoaded)
    const dispatch = useDispatch();
 
    useEffect(()=>{
        
        dispatch(getUser(id))
        console.log(history, 'aaaaaaaaaaaaaaaaaaaaaaaaaa')
    },[])
    
    return (
        <div style={{display: history.location.pathname === '/users/me'? 'none' : 'block'}}>
        {!loaded? (<div>loading...</div>):
          ( 
            <div className={styles.mainContainer}>

            <ProfileComponent user={user} history={history}/>

            <div className={styles.projects}>
                    <Bold color='black' size='36' className={styles.myProj}>Проекты сотрудника</Bold>

                    {user.projects.map((el,i)=>{
                        
                        return(
                            <ProjectsCard project={el}  sprints={user.sprints} history={history}/>
                        )
                    })}
                    
            </div>
          </div>
            )
        }
        </div>
    )
}



export default Employe