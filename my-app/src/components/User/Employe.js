import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from "../../redux/actions/user";
import { url } from '../utils/axios';



const Employe = ({match, history}) => {
    let {id} = match.params;
    const user = useSelector(state => state.users.user)
    const loaded = useSelector(state => state.users.userLoaded)
    const dispatch = useDispatch();
 
    useEffect(()=>{
        
        dispatch(getUser(id))
        
    },[])
    
    return (
        <>
        {!loaded? (<div>loading...</div>):
          ( <div>
              <div style={{display:'flex', height:'150px',marginLeft:'120px'}}>
              <img  style={{width:'150px'}} className='logo' src={`${url}/${user.avatar}`}/>
              <div>
                  <h1 style={{marginLeft:'30px', textAlign:'left'}}>
                    {user.name}
                </h1>
                <h3 style={{marginLeft:'30px', textAlign:'left'}}>{user.position}</h3>
                <p style={{marginLeft:'30px', textAlign:'left'}}>Е-баллы: {Math.floor(Math.random() * 100)}</p>
              </div>
                
              </div>
             <h1 style={{marginLeft:'120px',marginTop:'70px',marginBottom:'40px'}}>Проекты сотрудника</h1>
              <table style={{marginLeft:'120px'}} className="table__allproj" >
  <thead>
    <tr>
        
      <th>Название</th>
      <th>Дата начала</th>
      <th>Дедлайн</th>
      <th>Статус</th>
  
    </tr>
   </thead>
    <tbody>
       {user.projects.map((project,index) => {
           return(  
        <tr key={index} onClick={() => history.replace(`/projects/${project.crypt}`)} title="Открыть проект">
           
            <td>{project.title}</td>
            <td>{project.dateStart.slice(0, 10)}</td>
            <td>{project.dateFinish!==undefined?project.dateFinish.slice(0, 10):'нет'}</td>
            <td>{project.status ? <p>Завершен</p>:<p>В работе</p>}</td>
            
        </tr>
        )
       })} 
     
  </tbody>
</table>
        </div> )
        }
        </>
    )
}



export default Employe