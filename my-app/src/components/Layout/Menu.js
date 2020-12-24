import { NavLink } from "react-router-dom"
import {useSelector} from 'react-redux'
import {MenuHead, StyledLink} from '../../Styles/layout'




const Menu = ({menu}) => {
    const user = useSelector(state => state.auth.user)
    return (
        <MenuHead open={menu}>
            
            <div className='open__menu'>
                    {/* <StyledLink
                    to='/users/me'
                    > <p>Мой профиль</p></StyledLink> */}


                    <StyledLink className='menu__nav'
                    to='/help'
                    >Проблемы с компом </StyledLink>
                
                    <StyledLink className='menu__nav'
                    to='/new'
                    >Создать проект </StyledLink>       
            </div>


            <div className='open__menuProfile'>
                    <StyledLink
                    to='/users/me'
                    >Мой профиль</StyledLink>

                    <StyledLink
                    to='/projects/my'
                    >Мои проекты</StyledLink>

{user.permission==='admin'?(<StyledLink
              to='/tickets'
              >Панель сисадмина</StyledLink>):<></>}
            </div>

        </MenuHead>
    )
}



export default Menu