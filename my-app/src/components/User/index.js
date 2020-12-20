
//@ALL USERS PAGE

import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { allUsers } from "../../redux/actions/user";

//styled components
import { Container, Title } from "../../Styles/layout";
import { Table } from "../../Styles/tabel";



const Users = ({history}) => {


    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)


    useEffect(() => {
        dispatch(allUsers())
    }, [])
    return (
        <Container> 
            <Title > Все сотрудники</Title>
            
            {!users ? <p>loading...</p> : (
                <Table>
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
                            <tr onClick={() => history.replace(`/users/${user._id}`)}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.position}</td>
                                <td>{user.projects.length}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )}
        </Container>
    )
}



export default Users