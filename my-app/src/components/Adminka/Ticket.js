import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";



import { useLocation} from "react-router";
import { getTicket } from "../../redux/actions/tikets";
import { url } from "../utils/axios";



const Ticket = ({match}) => {
    let {id} = match.params;
    const dispatch = useDispatch();
    const loaded = useSelector(state => state.tickets.ticketLoad)
    const ticket = useSelector(state => state.tickets.ticket)

    useEffect(() => {
        dispatch(getTicket(id));
    }, [])

    
    return (
        <div>
            {!loaded ? <p> loading...</p>: (
                <div>
                    <h1>{ticket.problemname}</h1>
                    <p>Описание проблемы: {ticket.text} </p>
                    <p>Дата {ticket.date}</p>
                    <p>Насоклько срочно: {ticket.emergency}</p>

                    <p>Пароль от компа {ticket.pcpass}</p>
                    <img width="100%"src={`${url}/ticketSS/${ticket.screenshot}`} />

                    
                </div>
            )}
        </div>
    )
}



export default Ticket