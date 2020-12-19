


import {  Redirect } from 'react-router-dom';



import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { allTickets } from "../../redux/actions/tikets";
// import { allProjects } from '../../redux/actions/projects';
import { allUsers, userPermissions } from "../../redux/actions/user";

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
		{!loaded? (<div></div>):
        (<div className="main__allproj"> 
            <h1> Все пользователи</h1>
            
                <div>
                 
                    <table className="table__allproj" >
  <thead>
    <tr>
    	<th>Пользователь</th>
      	<th>Должность</th>
      	<th>Доступ</th>
      
    </tr>
   </thead>
   <tbody>
       {team.map((team,index) => {
           return(  
			
			<tr key={index} >
				<td>{team.name}</td>
				<td>{team.position}</td>
				<td> 
				<select  defaultValue={team.permission} style={{width: '100px',marginTop:'10px', overflow:'hidden', outline: 'none', border:'none'}} onChange={(e)=>selected(e, team._id)}>
					<option  value='user'>user</option>
					<option  value='admin'>admin</option>
					<option  value='manager'>manager</option>
				</select></td>
			</tr>
    	 )
       }
	   )
	   } 
     
  </tbody>
</table>
                </div>
            
		</div>
		)}
		
		</div>
    )
}



export default Permission