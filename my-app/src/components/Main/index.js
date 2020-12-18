


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './main.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allNews, createNews, deleteNews, updateNews} from '../../redux/actions/news';
// import { allUsers } from "../../redux/actions/user";
import Me from '../User/me'

const Main = ({history}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.news.loaded)
    const listNews = useSelector(state => state.news.news)
    const user = useSelector(state => state.auth.user)

    const [newsOpen, setOpen] = useState({
        status: false,
        post: '',
    })

    const [formData, setFormData ] = useState({
        
        title: '',   //title
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

        dispatch(updateNews())
    }

useEffect(()=>{
 dispatch(allNews())
},[])

    return (
<div className='main__container'>
    <div className='main__profile'>
        <img className='main__profile__logo' src={user.avatar}/>
        <div className='main__profile__name'>{user.name}</div>
        <div className='main__profile__position'>Position: {user.position}</div>
    </div>



    
    <div className='main__projects'>
        Мои проекты
        <table>
        {user.projects.map((el,i)=>{

            return(
                <tr>
                    <td>{el.title}</td>
                    <td>{el.type}</td>
                    <td>{el.sprints.length}</td>
                </tr>
            )
        })}
        </table>
    </div>





    <div className='main__news'>
        <div onClick={()=>console.log(listNews)}>news</div>
        <form className='form' onSubmit={onSubmit}>
            <input 

                type='text'
                placeholder='Заголовок'
                name='title'
                value={title}
                onChange={e => onChange(e)}/>

   
            <input 
                type='text'
                placeholder='Подзаголовок'
                name='subtitle'
                value={subtitle}
                onChange={e => onChange(e)}/>

            <input 
                type='text'
                placeholder='Текст'
                name='text'
                value={text}
                onChange={e => onChange(e)}/>
            



            <button  type="submit">Создать новость</button>

            </form>

            {!loaded? <p>loading...</p> : 
            
            <div className='table'>
                {listNews.map((el,i)=>{
                    
                    return(
                        <div className='table__tr' onClick={()=>newsClick(el)}>
                            <p className='table_td'>{el.title}</p>
                            <p className='table_td'>{el.subtitle}</p>
                            <p className='td__text'>{el.text}</p>
                            <p className='table_td' onClick={(e)=>onDelete(e, el._id)}>delete</p>
                            
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
                <div className='update'>
                    Update news
                            <form className='form' onSubmit={onUpdate}>
                                    <input 

                                        type='text'
                                        placeholder='Заголовок'
                                        name='title'
                                        value={newsOpen.post.title}
                                        onChange={e => onChange(e)}/>

                        
                                    <input 
                                        type='text'
                                        placeholder='Подзаголовок'
                                        name='subtitle'
                                        value={newsOpen.post.subtitle}
                                        onChange={e => onChange(e)}/>

                                    <input 
                                        type='text'
                                        placeholder='Текст'
                                        name='text'
                                        value={newsOpen.post.text}
                                        onChange={e => onChange(e)}/>
                                    



                                    <button  type="submit">Обновить новость</button>

                            </form>
                </div>
            </div>
            }
            
</div>

      )
}



export default Main