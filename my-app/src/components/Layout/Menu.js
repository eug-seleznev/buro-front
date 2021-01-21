import { NavLink } from "react-router-dom"
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {MenuHead, StyledLink} from '../../Styles/layout'
import {Button} from '../../Styles/buttons'




const Menu = ({menu, menuProfile}) => {
//menu = state({menu: boolean, menuProfile: boolean})
const [open, setOpen] = useState({
    menu:false,
    menuProfile:false
})

useEffect(()=>{
    open.menu==false ? setOpen({menuProfile:false, menu:true}) : setOpen({menuProfile:false, menu:false})
console.log('menu works')
},[menu])

useEffect(()=>{
    open.menuProfile==false ? setOpen({menuProfile:true, menu:false}) : setOpen({menuProfile:false, menu:false})
console.log('menuProfile works')

},[menuProfile])




const exit = () => {
  
    localStorage.removeItem('token')
    window.location.reload();
}


    const user = useSelector(state => state.auth.user)
    return (
        <MenuHead open={open}>
            
            <div className='open__menu' onMouseLeave={()=>setOpen({menu:false, menuProfile:false})}>
                   


                    <StyledLink className='menu__nav'
                    to='/help'
                    >Проблемы с компом </StyledLink>
                
                    <StyledLink className='menu__nav'
                    to='/new'
                    >Создать проект </StyledLink>       
            </div>


            <div className='open__menuProfile' onMouseLeave={()=>setOpen({menu:false, menuProfile:false})}>
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