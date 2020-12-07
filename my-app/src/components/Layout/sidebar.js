
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'



const Sidebar = () => {
    // const user = useSelector(state => state.auth.isAuthenticated)

    return (
    <div>
         <NavLink
              to='/'
              className="nav-link" >Главная </NavLink>

         <NavLink
              to='/admin'
              className="nav-link" >Сисадминошная </NavLink>


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
        
         </div>
         )
}



export default Sidebar