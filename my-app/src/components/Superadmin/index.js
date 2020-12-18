import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { permissionReturn } from "../../redux/actions/user";
const Superadmin = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch (permissionReturn())
	},[])
    return (
        <div style={{textAlign:'center',width:'200px',marginLeft:'90px'}}> 

			<h1> Админка </h1>
			<NavLink to='/admin/permissions'  >Страница доступов</NavLink>
		</div>
    )
}



export default Superadmin