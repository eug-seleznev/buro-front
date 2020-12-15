
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import './sidebar.css'


const Sidebar = () => {
    // const user = useSelector(state => state.auth.isAuthenticated)

    return (
    <div className="main">
         <NavLink
              to='/'
              className="nav-link" >Главная </NavLink>

         <NavLink
              to='/admin'
              className="nav-link" >Сисадминошная </NavLink>
              <NavLink
              to='/admin/all'
              className="nav-link" >Страница сисадмина </NavLink>


         <NavLink
              to='/db'
              className="nav-link" >База знаний </NavLink>
        
        <NavLink
              to='/projects'
              className="nav-link" >Проекты </NavLink>
        <NavLink
              to='/new'
              className="nav-link" >Создать новый проект </NavLink>
        <NavLink
              to='/office'
              className="nav-link" >Про офис </NavLink>
              <NavLink
              to='/users'
              className="nav-link" >Все сотрудники </NavLink>
              <NavLink
              to='/users/me'
              className="nav-link" >Мой профиль </NavLink>
              
        
         </div>
         )
}



export default Sidebar