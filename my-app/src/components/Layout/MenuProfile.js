import { NavLink } from "react-router-dom"

import {MenuHead, StyledLink} from '../../Styles/layout'




const MenuProfile = () => {
    return (
        <MenuHead>
            <StyledLink
              to='/users/me'
              >Мой профиль</StyledLink>


            <StyledLink
              to='/projects/my'
               >Мои проекты</StyledLink>
            <StyledLink
              to='/tickets'
              >Панель сисадмина</StyledLink>

              
               


        </MenuHead>
    )
}



export default MenuProfile