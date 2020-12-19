



import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";

//styled components
import {Table} from '../../Styles/tabel'
import {Container, Title} from '../../Styles/layout'


const Dashboard = ({history}) => {
    const dispatch = useDispatch();
    const loaded = useSelector(state => state.tickets.loaded)
    const tickets = useSelector(state => state.tickets.tickets)


    useEffect(() => {
        dispatch(allTickets())
    }, [])

    
    return (
        <Container> 
            <Title> Входящие тикеты</Title>
                <p> количество проблем: {tickets.length} </p>

            {!loaded ? <p>loading...</p> : (
            
                    <Table main>
                        <thead>
                            <tr>
                            <th>Номер</th>
                            <th>Проблема</th>
                            <th>Статус</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tickets.map((ticket,index) => 
                                
                                <tr onClick={() => history.push(`/tickets/${ticket._id}`)}>
                                    <td>{index+1}</td>
                                    <td>{ticket.problemname}</td>
                                    <td>{ticket.status ? <p>ongoing</p>:<p>complete</p>}</td>
                                    
                                </tr>
                                
                            )}
                        </tbody>
                    </Table>
                
            )}
        </Container>
    )
}



export default Dashboard