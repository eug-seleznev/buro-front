import { NavLink } from "react-router-dom"

import {MenuHead} from '../../Styles/layout'




const Menu = () => {
    return (
        <MenuHead>
            {/* <NavLink
              to='/users/me'
              > <p>Мой профиль</p></NavLink> */}


             <NavLink
              to='/help'
               ><p>Проблемы с компом </p> </NavLink>
             <NavLink
              to='/tickets'
              ><p>панель сисадмина </p>  </NavLink>

            <NavLink
              to='/new'
              ><p>Создать проект</p> </NavLink>
              
               


        </MenuHead>
    )
}



export default Menu