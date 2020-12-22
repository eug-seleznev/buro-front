import { NavLink } from "react-router-dom";
import { useDispatch, useSelector,  } from "react-redux"
import { useEffect, useRef } from "react";
import { permissionReturn, userPermissions } from "../../redux/actions/user";
import  News  from './newsAdm'
import './superadmin.css'
const Superadmin = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user)
	const admBody = useRef(null)

	const newsScroll = () => {
		window.scrollTo({
			top: 9000,
			behavior: "smooth"
		})
	}

	useEffect(()=>{
		dispatch (permissionReturn())
	},[])
    return (
        <div className='superadmin__cont' > 

			<h1> Админка </h1>
			
			<div className='link__cont'>
			<NavLink className='nav__link__sadm' to='/admin/permissions'  >Страница доступов</NavLink>
			<br/>
			
			<NavLink className='nav__link__sadm' to='/admin/editproj'  >Редактировать проекты</NavLink>
			<div className='nav__link__sadm' onClick={()=>newsScroll()}>Создать новость</div>
			</div>
			
			<News permissions={user.permissions} />

		

		</div>
    )
}



export default Superadmin