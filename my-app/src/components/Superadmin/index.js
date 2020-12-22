import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { permissionReturn, userPermissions } from "../../redux/actions/user";
import  News  from './newsAdm'
const Superadmin = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user)
	useEffect(()=>{
		dispatch (permissionReturn())
	},[])
    return (
        <div style={{textAlign:'center',width:'200px',marginLeft:'110px'}}> 

			<h1> Админка </h1>
			<NavLink to='/admin/permissions'  >Страница доступов</NavLink>
			<br/>
			
			<NavLink to='/admin/editproj'  >Редактировать проекты</NavLink>
			<News permissions={user.permissions} />

		

		</div>
    )
}



export default Superadmin