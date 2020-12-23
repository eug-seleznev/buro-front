
//@ALL USERS PAGE

import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { allUsers } from "../../redux/actions/user";

//styled components
import { Container, Title,H1,Card } from "../../Styles/common";
import { Table, Tr, Td } from "../../Styles/tables";



const Users = ({history}) => {


    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)


    useEffect(() => {
        dispatch(allUsers())
        console.log(users)
    }, [])
    return (
        <Container> 
            <Card>
            <H1 > Все сотрудники</H1>
            
            {!users ? <p>loading...</p> : (
                <Table>
                    
                        <Tr columns='1fr 1fr 1fr 1fr' top='top'>
                        <Td>Имя</Td>
                        <Td>email</Td>
                        <Td>Должность</Td>
                        <Td>Активные проекты</Td>
                        </Tr>
                   
                        {users.map(user => {
                            return(  
                            <Tr columns='1fr 1fr 1fr 1fr' onClick={() => history.replace(`/users/${user._id}`)}>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.position}</Td>
                                <Td>{user.projects.length}</Td>
                            </Tr>
                            )
                        })}
                    
                </Table>
            )}
            </Card>
        </Container>
    )
}



export default Users