



import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";

//styled components
import {Table, Tr, Td} from '../../Styles/tables'
import {Container, Card, Title,} from '../../Styles/common'
import { H1, H3} from '../../Styles/typography'


const Dashboard = ({history}) => {
    const dispatch = useDispatch();
    const loaded = useSelector(state => state.tickets.loaded)
    const tickets = useSelector(state => state.tickets.tickets)


    useEffect(() => {
        dispatch(allTickets())
    }, [])

    
    return (
        <div> 
            <Card>
            <H1> Входящие тикеты</H1>
                <p> количество проблем: {tickets.length} </p>

            {!loaded ? <p>loading...</p> : (
            
                    <Table main>
                      
                            <Tr columns='1fr 5fr 1fr' top='top'>
                                <Td>Номер</Td>
                                <Td>Проблема</Td>
                                <Td>Статус</Td>
                            </Tr>
                    
                            {tickets.map((ticket,index) => 
                                
                                <Tr columns='1fr 5fr 1fr' onClick={() => history.push(`/tickets/${ticket._id}`)}>
                                    <Td>{index+1}</Td>
                                    <Td>{ticket.problemname}</Td>
                                    <Td>{ticket.status ? <p>ongoing</p>:<p>complete</p>}</Td>
                                    
                                </Tr>
                                
                            )}
                     
                    </Table>
                
            )}
            </Card>
        </div>
    )
}



export default Dashboard