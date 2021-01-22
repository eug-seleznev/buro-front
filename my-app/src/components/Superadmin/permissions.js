


import {  Redirect } from 'react-router-dom';



import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { allTickets } from "../../redux/actions/tikets";
// import { allProjects } from '../../redux/actions/projects';
import { allUsers, userPermissions } from "../../redux/actions/user";

import { Table, Td, Tr } from "../../Styles/tables";
import { Status } from "../../Styles/project";
import { Container, Card, } from "../../Styles/common";
import { H1, H3} from '../../Styles/typography'

const Permission = ({history}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    
       
	const loaded = useSelector(state => state.users.loaded)
	const team = useSelector(state => state.users.users)




    useEffect(() => {
		dispatch(allUsers())
		// console.log ('team')
	}, [])
	
	const selected =(e, id)=> {
			console.log (e.target.value, id)
			dispatch(userPermissions(e.target.value, id))
	}
    return (
		<div>
			<Card>
		{!loaded? (<div></div>):
        (<div> 
            <H1> Все пользователи</H1>
            
               
                 
                    <Table className="table__allproj" >
  
    <Tr columns='1fr 1fr 1fr' top>
    	<Td>Пользователь</Td>
      	<Td>Должность</Td>
      	<Td>Доступ</Td>
      
    </Tr>
   
       {team.map((team,index) => {
           return(  
			
			<Tr columns='1fr 1fr 1fr' key={index} >
				<Td>{team.name}</Td>
				<Td>{team.position}</Td>
				<Td> 
				<select  defaultValue={team.permission} style={{width: '100px',marginTop:'10px', overflow:'hidden', outline: 'none', border:'none'}} onChange={(e)=>selected(e, team._id)}>
					<option  value='user'>user</option>
					<option  value='admin'>admin</option>
					<option  value='manager'>manager</option>
				</select></Td>
			</Tr>
    	 )
       }
	   )
	   } 
     

</Table>
              
            
		</div>
		)}
		</Card>
		</div>
    )
}



export default Permission