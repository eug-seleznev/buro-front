import { useSelector } from 'react-redux'
import './sidebar.css'
import { useRef } from "react";
import {SidebarContainer, SidebarLink} from '../../Styles/layout'


const Sidebar = () => {

const user = useSelector(state => state.auth.user)
const adminka = useRef(null)



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
            <SidebarLink ref={adminka}  to='/admin' className="nav-link">
                    <img src='/sidebarIcon.png' title="Админка"></img>  
                    {user.permission==='admin'?<p>Админка</p>:''}
            </SidebarLink>: ''}
                                    

         </SidebarContainer>
         )
}



export default Sidebar