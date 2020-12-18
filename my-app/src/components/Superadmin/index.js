import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

const Superadmin = () => {
	const dispatch = useDispatch();
	useEffect((0))
    return (
        <div style={{textAlign:'center',width:'200px',marginLeft:'90px'}}> 

			<h1> Админка </h1>
			<NavLink to='/admin/permissions'  >Страница доступов</NavLink>
		</div>
    )
}



export default Superadmin