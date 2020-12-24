import { NavLink } from "react-router-dom"
import {useSelector} from 'react-redux'
import {MenuHead, StyledLink} from '../../Styles/layout'




const MenuProfile = () => {
  const user = useSelector(state => state.auth.user)
 
    return (
        <MenuHead >
            <StyledLink
              to='/users/me'
              >Мой профиль</StyledLink>


            <StyledLink
              to='/projects/my'
               >Мои проекты</StyledLink>
            

              
               


        </MenuHead>
    )
}



export default MenuProfile