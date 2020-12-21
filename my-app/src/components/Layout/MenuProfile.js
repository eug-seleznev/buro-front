import { NavLink } from "react-router-dom"

import {MenuHead, MenuPro} from '../../Styles/layout'




const MenuProfile = () => {
    return (
        <MenuPro>
            <NavLink
              to='/users/me'
              > <p>Мой профиль</p></NavLink>


             <NavLink
              to='/projects/my'
               ><p>Мои проекты </p> </NavLink>
             <NavLink
              to='/tickets'
              ><p>панель сисадмина </p>  </NavLink>

              
               


        </MenuPro>
    )
}



export default MenuProfile