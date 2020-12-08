


import {  Redirect } from 'react-router-dom';


//профиль пользователя по ID

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTickets } from "../../redux/actions/tikets";
// import { allUsers } from "../../redux/actions/user";

const Dashboard = ({history}) => {
    const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth.isAuthenticated)
    const loaded = useSelector(state => state.tickets.loaded)
    const tickets = useSelector(state => state.tickets.tickets)


    useEffect(() => {
        dispatch(allTickets())
    }, [])

    const ticketHandle = (id) => {
        console.log(id, 'hey')
       return  <Redirect push to={`/admin/${id}`}/>


    }
    return (
        <div> 
            <h1> Входящие тикеты</h1>
            {!loaded ? <p>loading...</p> : (
                <div>
                    <p> количество проблем: {tickets.length} </p>
                    <table>
  <thead>
    <tr>
        <th>Номер</th>
      <th>Проблема</th>
      <th>Статус</th>
    </tr>
   </thead>
   <tbody>
       {tickets.map((ticket,index) => {
           return(  
        <tr onClick={() => history.push(`./${ticket._id}`)}>
            <td>{index+1}</td>
            <td>{ticket.problemname}</td>
            <td>{ticket.status ? <p>ongoing</p>:<p>complete</p>}</td>
            
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



export default Dashboard