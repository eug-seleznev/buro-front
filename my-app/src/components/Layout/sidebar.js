
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import './sidebar.css'
import { useEffect, useState,useRef } from "react";
import {SidebarContainer, SidebarOpen , StyledLink, SidebarLink} from '../../Styles/layout'
import { H1, H3} from '../../Styles/typography'




const Sidebar = () => {
    // const user = useSelector(state => state.auth.isAuthenticated)
const [open, setOpen] = useState(false)
const user = useSelector(state => state.auth.user)
const adminka = useRef(null)


useEffect(()=> {
     console.log (user.permission)
},[])


    return (
         <SidebarContainer>

            <SidebarLink to='/' className="nav-link" >
                    <img src='sidebarIcon.png' title="Главная" />
                    <p>Главная</p>
            </SidebarLink>
        

            
        
            <SidebarLink to='/projects' className="nav-link" >
                    <img src='/sidebarIcon.png' title="Все проекты" />
                    <p>Проекты</p>
            </SidebarLink>
       

            <SidebarLink to='/users' className="nav-link" > 
                    <img src='/sidebarIcon.png' title="Команда"/>
                    <p>Команда</p>
            </SidebarLink>
         


            {user.permission==='admin'?
            <SidebarLink ref={adminka}  to='/admin' className="nav-link" onMouseOver={()=>setOpen(false)} onMouseLeave={()=>setTimeout(()=>setOpen(false),100) }>
                    <img src='/sidebarIcon.png' title="Админка"></img>  
                    {user.permission==='admin'?<p>Админка</p>:''}
            </SidebarLink>: ''}
                                    

                                    
              {open && <SidebarOpen open top={adminka.current.offsetTop-40} onMouseEnter={()=>setTimeout(()=>setOpen(false),100) } onMouseOver={()=>setOpen(false)} onMouseLeave={()=>setOpen(false)}>

                    <H1> Админка </H1>
                    <StyledLink to='/admin/permissions'  >Страница доступов</StyledLink>
                    <StyledLink to='/admin/editproj'  >Редактировать проекты</StyledLink>
                    <StyledLink to='/admin/news'  >Редактировать новости</StyledLink>


              </SidebarOpen>
                }

         </SidebarContainer>
         )
}



export default Sidebar