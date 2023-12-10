import { useState } from 'react';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'
import classes from './TicketDetail.module.css'

function TicketDetail(props) {

    const [ticketState, setTicketState] = useState(parseInt(props.ticketNumber));
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.departure}</h1>
            <h2>{props.destination}</h2>
            <p>{props.duration}</p>
            <p>{props.cost}</p>
            <p>{ticketState}</p>
            <button onClick={()=> setTicketState(ticketState - 1)}>buy ticket</button>
        </section>
    )
}

export default TicketDetail;