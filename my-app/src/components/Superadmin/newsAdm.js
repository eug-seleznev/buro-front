
import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID
import './news.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
import { allNews, createNews, deleteNews, updateNews} from '../../redux/actions/news';
// import { allUsers } from "../../redux/actions/user";


//////////////////////////////////////// ШО ЭТО
import Me from '../User/me'
import { url } from '../utils/axios';
///////////////
const News = ({permissions}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.news.loaded)
    const listNews = useSelector(state => state.news.news)
    const user = useSelector(state => state.auth.user)

    const [newsOpen, setOpen] = useState({
        status: false,
        post: '',
    })
    const [deleteConfirm, setConfirm] = useState({
        status: false,
        post:'',
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
            setTimeout(() => {
                setConfirm({status:false, post:''})
                dispatch(allNews())
            }, 100);  
    }
    const onDelete = async (e,id) => {
console.log(deleteConfirm)
        e.preventDefault();
        
        setConfirm({status:true,post:id})
       
    }
    const onUpdate = async (e,id) => {

        e.preventDefault();
        setOpen({status:true, post:id})
       setFormData({
        title: id.title,   
        subtitle: id.subtitle, 
        text: id.text,  
       })
    }
    const deleteNewsButton = async e => {
        e.preventDefault();

        dispatch(deleteNews(deleteConfirm.post._id))
        setTimeout(() => {
            setConfirm({status:false, post:''})
            dispatch(allNews())
        }, 100);
    }
    const updateNewsButton = async e => {
        e.preventDefault();

        let id = newsOpen.post._id
        let data = formData
        console.log(data,'fffffffffffffffffffffffffff')
        dispatch(updateNews({id, data}))


        setTimeout(() => {
            setOpen({status:false, post:''})
            dispatch(allNews())
        }, 100);
    }
  


useEffect(()=>{
 dispatch(allNews())
 console.log(user,'hiiiiiiiiiiii')
},[])

    return (

<div className='news__administration'>
				



                
				{!loaded? <p>loading...</p> : 
            
            <div className='table'>
                {listNews.map((el,i)=>{
                    
                    return(
                        <div className='news__tr' >
                            <p className='news__td1'>{el.title}</p>
                            <p className='news__td2'>{el.subtitle}</p>
                            <p className='news__td3'>{el.text}</p>

                            <button className='table__update' onClick={(e)=>onUpdate(e, el)}>update</button>
                            <button className='table__delete' onClick={(e)=>onDelete(e, el)}>delete</button>
                            
                        </div>
                    )
                })}
            </div>
            
            }


<div className='create'>Создать новость
<form className='form news__form' onSubmit={onSubmit}>
           
            <input 
                className='news__title'
                type='text'
                placeholder='Заголовок'
                name='title'
                value={title}
                onChange={e => onChange(e)}/>

   
            <input 
                className='news__subtitle'
                type='text'
                placeholder='Подзаголовок'
                name='subtitle'
                value={subtitle}
                onChange={e => onChange(e)}/>

            <textarea 
                className='news__texts'
                
                placeholder='Текст'
                name='text'
                value={text}
                onChange={e => onChange(e)}/>
            



            <button className='news__submit'  type="submit">Создать новость</button>

            </form>
            </div>


            {!newsOpen.status? <div/>:
            <div className='update__bg'>
				<div className='news__update'>
						Редактировать новость
                        <form className='form news__form' onSubmit={onUpdate}>
           
                                    <input 
                                        className='news__title'
                                        type='text'
                                        placeholder='Заголовок'
                                        name='title'
                                        value={title}
                                        onClick={()=>console.log(newsOpen,'aaaaaaaaaaaaaaaaaaa',formData)}
                                        onChange={e => onChange(e)}/>

                            
                                    <input 
                                        className='news__subtitle'
                                        type='text'
                                        placeholder='Подзаголовок'
                                        name='subtitle'
                                        value={subtitle}
                                        onChange={e => onChange(e)}/>

                                    <textarea 
                                        className='news__texts'
                                        
                                        placeholder='Текст'
                                        name='text'
                                        value={text}
                                        onChange={e => onChange(e)}/>
                                    


                                <div className='news__submit' >
                                    <button  type="submit" onClick={(e) =>updateNewsButton(e)}>Редактировать новость</button>
                                    <button  type="submit" onClick={()=>setOpen({status:false, post:''})}>Отмена</button>
                                </div>
                                    

                        </form>
                </div>
            </div>
            }
            {!deleteConfirm.post? <div/>:
            <div className='delete__bg'>
                <div className='delete__container'>
                    <div onClick={()=>console.log(deleteConfirm)}>Вы уверенны что хотите удалить новость "{deleteConfirm.post.title}"</div>
                    <button  type="submit" onClick={(e)=>deleteNewsButton(e)}>Удалить новость</button>
                    <button  type="submit" onClick={()=>setConfirm({status:false, post:''})}>Отмена</button>
                </div>
            </div>
            }
			</div>

)
}



export default News