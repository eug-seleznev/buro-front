




//профиль пользователя по ID

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allUsers } from "../../redux/actions/user";

const Users = () => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.users.loaded)
    const users = useSelector(state => state.users.users)


    useEffect(() => {
        dispatch(allUsers())
    }, [])
    return (
        <div> 
            <h1> Все сотрудники</h1>
            {!loaded ? <p>loading...</p> : (
                <div>
                    <p> users count: {users.length} </p>
                    <table>
  <thead>
    <tr>
      <th>Имя</th>
      <th>email</th>
      <th>Должность</th>
      <th>Активные проекты</th>
    </tr>
   </thead>
   <tbody>
       {users.map(user => {
           return(  
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.position}</td>
            <td>{user.projects.length}</td>
        </tr>
        )
       })}
     
  </tbody>
</table>
                </div>
            )}
        </div>
    )
}



export default Users