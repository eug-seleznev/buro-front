import styles from '../../Styles/modules/main/main.module.css'
import Profile from './profileComponent'
import NewsCard from './newsCard'
import ProjectsCard from './projectsCard'

import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './main.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allNews, createNews, deleteNews, updateNews} from '../../redux/actions/news';
import { addTasks, finishSprint, finishTask, getSprint, } from "../../redux/actions/projects";

// import { allUsers } from "../../redux/actions/user";
import {Card, Container} from '../../Styles/common'
import { H1, H3} from '../../Styles/typography'

import {Table, Tr, Td} from '../../Styles/tables'

import { Button } from '../../Styles/buttons'
//////////////////////////////////////// ШО ЭТО
import { url } from '../utils/axios';
///////////////
const Main = ({history}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.news.loaded)
    const listNews = useSelector(state => state.news.news)
    const loadedUser = useSelector(state => state.auth.loaded)
    const user = useSelector(state => state.auth.user)
    const allUsers = useSelector(state => state.users.users)

    const sprint = useSelector(state => state.projects.sprint)

    const [newsOpen, setOpen] = useState({
        status: false,
        post: '',
    })
    const [sprintsArr, setSprints] = useState(null)


  


//     const Redirect = () => {  
//         return history.push(`/projects`)
// }



   
    const onCheck = (e,id) => {
       
 
        let taskid = e.target.value;
        dispatch(finishTask({taskid, id}))
       
    }
    const finishSprintButton = (id) => {
        // {user.permission=='user'?<div/>:<Button onClick={()=>finishSprintButton(sprint._id)}>Завершить спринт</Button>}
        dispatch(finishSprint(id));
      
    }

useEffect(()=>{
 dispatch(allNews())
 console.log(user, 'userrrrrrrrrrrrrrrrr')
 const sprints = user.sprints.map((el,i)=>{
        return el
    })
    setSprints(sprints)
},[])


    return (
        <>
        {!loadedUser ? <p> loading..</p> : (
<Container className='main__container'>

    <Profile className='main__profile' />
 

    <div className={styles.projects}>
        <H1 className={styles.myProj}>Мои проекты</H1>
        
        {user.projects.map((el,i)=>{
            
            return(
                <ProjectsCard project={el}  sprints={sprintsArr} />
            )
        })}
        
    </div>


    <div className={styles.news}>
        
        <H1>Новости бюро:</H1>

            {!loaded? <p>loading...</p> : 
            
            listNews.map((el,i)=>{
                 
                    return(
                       i<3 && <NewsCard el={el}/>
                    )
                })
            }
        
        <div className={styles.allNews}>Все новости</div>
            
    </div>


    
            
</Container>)}
</>
      )
}



export default Main