
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
              <p> главная</p>

        

              {/* <NavLink
              to='/tickets'
              className="nav-link" ><img src='/invite.png' title="Запрос сисадмину"></img> </NavLink>
                                          <p> перенести в сисадмина</p> */}



         {/* <NavLink
              to='/db'
              className="nav-link" ><img src='/questions.png' title="База знаний"></img></NavLink> */}
        
        <NavLink
              to='/projects'
              className="nav-link" ><img src='/folder-invoices--v2.png' title="Все проекты"></img> </NavLink>
                                                        <p> все проекты</p>

        {/* <NavLink
              to='/new'
              className="nav-link" ><img src='/add-folder.png' title="Создать проект"></img> </NavLink>
               <p> перенести</p> */}
        {/* <NavLink
              to='/office'
              className="nav-link" ><img src='/add-contact-to-company.png' title="Вопросы по офису"></img> </NavLink> */}

              <NavLink
              to='/users'
              className="nav-link" > <img src='/conference-call.png' title="Команда"></img></NavLink>
              <p> сотрудники</p>
          {/* <NavLink
              to='/users/me'
              className="nav-link"  ><img src='/security-pass.png' title="Профиль"></img></NavLink>
              <p> перенести проф</p> */}
          {user.permission==='admin'?<NavLink to='/admin' className="nav-link" ><img src='/customer-insight.png' title="Админка"></img>  </NavLink>: ''}
          <p>админка</p>
         
         </div>
         </div>
         )
}



export default Sidebar