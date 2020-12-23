


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './main.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allNews, createNews, deleteNews, updateNews} from '../../redux/actions/news';
import { addTasks, finishSprint, finishTask, getSprint, } from "../../redux/actions/projects";

// import { allUsers } from "../../redux/actions/user";
import {Card, H1, } from '../../Styles/common'
import {Table, Tr, Td} from '../../Styles/tables'
import {H3} from '../../Styles/typography'
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

    const [formData, setFormData ] = useState({
        
        title: '', 
        subtitle: '', 
        text: '',  
      
      });
  
      const { title, subtitle, text,} = formData;


    const onChange = e => {

            e.preventDefault(); 

            setFormData({ ...formData, [e.target.name]: e.target.value });
    }
//     const Redirect = () => {  
//         return history.push(`/projects`)
// }
    const onSubmit = async e => {
        
            e.preventDefault();

            dispatch(createNews(formData))
            // setTimeout(() => Redirect(),100)  
    }
    const onDelete = async (e,id) => {

        e.preventDefault();

        dispatch(deleteNews(id))
    }
    const newsClick = (post) => {
        console.log('news click',newsOpen,post)
        setOpen({status: true, post: post})
    }
    const onUpdate = async e => {

        e.preventDefault();
        alert(`don't work now`)
        //PUT news/:id 
        //в body засовывать все что было в создании новости. 
        // dispatch(updateNews(????????????))
    }
    const onCheck = (e,id) => {
       
    console.log(e,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',id)
        let taskid = e.target.value;
        dispatch(finishTask({taskid, id}))
       
    }
useEffect(()=>{
 dispatch(allNews())
 console.log(user,'iiiiiiiiiiiiiiiiiiiiiiii',allUsers)
},[])

    return (
        <>
        {!loadedUser ? <p> loading..</p> : (
<div className='main__container'>
    <Card className='main__profile'>
        <img className='main__profile__logo' src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
        <H1 className='main__profile__name'>{user.name}</H1>
        <div className='main__profile__position'>Position: {user.position}</div>
    </Card>



    
    <Card className='main__projects'>
        <H1>Мои проекты</H1>
        <Table>
                <Tr columns='4fr 2fr 1fr' top='top'>
                    <Td >Название</Td>
                    <Td >Тип</Td>
                    <Td >Спринты</Td>
                </Tr>
        {user.projects.map((el,i)=>{

            return(
                <Tr columns='4fr 2fr 1fr' onClick={() => history.replace(`/projects/${el.crypt}`)} title="Открыть проект">
                    <Td >{el.title}</Td>
                    <Td >{el.type}</Td>
                    <Td >{el.sprints.length}</Td>
                </Tr>
            )
        })}
        </Table>
    </Card>

    
    <Card className='main__tasks'>

        <H1>Мои задачи</H1>
        
        {user.sprints.map((sprint,i)=>{
            
            return(
                <>
                <H3>Спринт: {sprint.dateOpen.slice (0, 16)}</H3>
                <Table>
                 <Tr columns='4fr 2fr 1fr' top='top' >
                    <Td>Название</Td>
                    <Td>Объем</Td>
                    <Td>Статус</Td>
                </Tr>
                
                    
                    {sprint.tasks.map((task,i)=>{

                        return(
                            <Tr columns='4fr 2fr 1fr' /*onClick={() => history.replace(`/projects/${el.crypt}`)}*/ >
                                    <Td>{task.taskTitle!=''?task.taskTitle:'Без названия'}</Td>
                                    <Td>{task.workVolume!=null?task.workVolume:'--'}</Td>
                                    <Td><input /*style={{display:`${el.status?'none':'block'}`}}*/ type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={task.taskStatus} value={task._id} onChange={(e)=>onCheck(e,sprint._id)}/></Td>
                            </Tr>
                        )


                    })}
                   
                
                </Table>
                </>
            )
        })}
        

    </Card>


    <Card className='main__news'>
        
        <H1>Новости</H1>

            {!loaded? <p>loading...</p> : 
            
            <Table>
                <Tr columns='1fr 1fr 3fr' top='top'>
                    <Td >Заголовок</Td>
                    <Td >Подзаголовок</Td>
                    <Td >Текст</Td> 
                </Tr>
                {listNews.map((el,i)=>{
                    
                    return(
                        <Tr columns='1fr 1fr 3fr' onClick={()=>newsClick(el)}>
                            <Td >{el.title}</Td>
                            <Td >{el.subtitle}</Td>
                            <Td >{el.text}</Td> 
                        </Tr>
                    )
                })}
            </Table>
            
            }
            

           


    </Card>


     {!newsOpen.status? <div/> : 
            <div className='opened__news'>
                <div className='open__title'>{newsOpen.post.title}</div>
                <div className='open__subtitle'>{newsOpen.post.subtitle}</div>
                <div className='open__text'>{newsOpen.post.text}</div>
                <div className='open__close' onClick={()=>setOpen({post:'', status: false})}>close</div>
                
            </div>
            }
            
</div>)}
</>
      )
}



export default Main