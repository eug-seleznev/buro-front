


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './main.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allNews, createNews, deleteNews, updateNews} from '../../redux/actions/news';
// import { allUsers } from "../../redux/actions/user";


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

useEffect(()=>{
 dispatch(allNews())
 
},[])

    return (
        <>
        {!loadedUser ? <p> loading..</p> : (
<div className='main__container'>
    <div className='main__profile'>
        <img className='main__profile__logo' src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
        <div className='main__profile__name'>{user.name}</div>
        <div className='main__profile__position'>Position: {user.position}</div>
    </div>



    
    <div className='main__projects'>
        <h3>Мои проекты</h3>
        <table className='main__proj__table'>
                <div     className='projects__tr top' >
                    <p className='table_td'>Название</p>
                    <p className='table_td'>Тип</p>
                    <p className='table_td'>Спринты</p>
                </div>
        {user.projects.map((el,i)=>{

            return(
                <div     className='projects__tr' onClick={() => history.replace(`/projects/${el.crypt}`)} title="Открыть проект">
                    <p className='table_td'>{el.title}</p>
                    <p className='table_td'>{el.type}</p>
                    <p className='table_td'>{el.sprints.length}</p>
                </div>
            )
        })}
        </table>
    </div>

    
    <div className='main__tasks'>

        <h3>Мои задачи</h3>
        <table>
                 <div     className='projects__tr top' >
                    <p className='table_td'>Название</p>
                    <p className='table_td'>Тип</p>
                    <p className='table_td'>Спринты</p>
                </div>
        {user.projects.map((el,i)=>{
            
            return(
                <div     className='projects__tr' onClick={() => history.replace(`/projects/${el.crypt}`)} title="Открыть проект">
                    <p className='table_td'>{el.title}</p>
                    <p className='table_td'>{el.type}</p>
                    <p className='table_td'>{el.sprints.length}</p>
                </div>
            )
        })}
        </table>
    </div>


    <div className='main__news'>
        <div onClick={()=>console.log(listNews)}><h3>news</h3></div>
       

            {!loaded? <p>loading...</p> : 
            
            <div className='main__table'>
                {listNews.map((el,i)=>{
                    
                    return(
                      <div     className='table__tr' onClick={()=>newsClick(el)}>
                            <p className='table_td'>{el.title}</p>
                            <p className='table_td'>{el.subtitle}</p>
                            <p className='table_td'>{el.text}</p>
                            
                            
                        </div>
                    )
                })}
            </div>
            
            }
            

           


    </div>


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