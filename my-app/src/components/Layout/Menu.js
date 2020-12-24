import { NavLink } from "react-router-dom"
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {MenuHead, StyledLink} from '../../Styles/layout'
import {Button} from '../../Styles/buttons'




const Menu = ({menu}) => {

const [open, setOpen] = useState(menu==true&& true)

useEffect(()=>{
    menu==true && setOpen(true)
},[])

const exit = () => {
  
    localStorage.removeItem('token')
    window.location.reload();
}


    const user = useSelector(state => state.auth.user)
    return (
        <MenuHead open={menu} /*onMouseLeave={()=>setOpen(false)}*/>
            
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
                    

                    <Button onClick={()=>exit()}
                    >Выход</Button>
            </div>

        </MenuHead>
    )
}



export default Menu