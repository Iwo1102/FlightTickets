import { useState } from 'react';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'
import classes from './TicketDetail.module.css'

/*function buyTicketHandler(props) {
    const [tickets, setTickets] = useState(parseInt(props.ticketNumber));
    setTickets()
}*/

function TicketDetail(props) {

    //const [tickets, setTickets] = useState(parseInt(props.ticketNumber));
    //console.log(tickets)
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.departure}</h1>
            <h2>{props.destination}</h2>
            <p>{props.duration}</p>
            <p>{props.cost}</p>
            <p>{props.ticketNumber}</p>
            <button onClick={()=> setTickets(props.ticketNumber - 1)}>buy ticket</button>
        </section>
    )
}

export default TicketDetail;