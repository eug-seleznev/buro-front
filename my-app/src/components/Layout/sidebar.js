
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import './sidebar.css'
import { useEffect } from "react";





const Sidebar = () => {
    // const user = useSelector(state => state.auth.isAuthenticated)
const user = useSelector(state => state.auth.user)
useEffect(()=> {
     console.log (user.permission)
},[])
    return (
         <div>
          
          <div className="main">
         <NavLink
              to='/'
              className="nav-link" ><img src='/health-data.png' title="Главная"></img> </NavLink>

         <NavLink
              to='/help'
              className="nav-link" ><img src='/open-end-wrench.png' title="Сисадминочная"></img></NavLink>
              <NavLink
              to='/tickets'
              className="nav-link" ><img src='/invite.png' title="Запрос сисадмину"></img> </NavLink>


         <NavLink
              to='/db'
              className="nav-link" ><img src='/questions.png' title="База знаний"></img></NavLink>
        
        <NavLink
              to='/projects'
              className="nav-link" ><img src='/folder-invoices--v2.png' title="Все проекты"></img> </NavLink>
        <NavLink
              to='/new'
              className="nav-link" ><img src='/add-folder.png' title="Создать проект"></img> </NavLink>
        <NavLink
              to='/office'
              className="nav-link" ><img src='/add-contact-to-company.png' title="Вопросы по офису"></img> </NavLink>
              <NavLink
              to='/users'
              className="nav-link" > <img src='/conference-call.png' title="Команда"></img></NavLink>
          <NavLink
              to='/users/me'
              className="nav-link"  ><img src='/security-pass.png' title="Профиль"></img></NavLink>
          {user.permission==='admin'?<NavLink to='/admin' className="nav-link" ><img src='/customer-insight.png' title="Админка"></img></NavLink>: ''}
         
         </div>
         </div>
         )
}



export default Sidebar