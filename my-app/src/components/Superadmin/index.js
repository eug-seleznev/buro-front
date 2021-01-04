import { NavLink } from "react-router-dom";
import { useDispatch, useSelector,  } from "react-redux"
import { useEffect, useRef } from "react";
import { permissionReturn, userPermissions } from "../../redux/actions/user";
import  News  from './newsAdm'
import './superadmin.css'
import { Container, Card, H1 } from '../../Styles/common';
import { Button } from '../../Styles/buttons';
import { StyledLink} from '../../Styles/layout'


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
		
        <Container> 
			<Card>
			<H1> Админка </H1>
		
			<StyledLink to='/admin/permissions'  >Страница доступов</StyledLink>
			
			
			<StyledLink to='/admin/editproj'  >Редактировать проекты</StyledLink>

			
			
			<StyledLink to='/admin/news'  >Редактировать новости</StyledLink>
		

			{/* <News permissions={user.permissions} /> */}

		</Card>

		</Container>
    )
}



export default Superadmin