import { useState } from 'react';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'
import { useRouter } from 'next/router';
import classes from './TicketDetail.module.css'
import handler from '../../pages/api/update-tickets'

function TicketDetail(props) {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)
    let newNumberData;
    const [ticketState, setTicketState] = useState(parseInt(props.ticketNumber));

    async function changeTicketHandler(newNumberData)  {
        console.log(newNumberData.ticketId);
        console.log(newNumberData.newTicketNum);

        await globalCtx.updateGlobals({cmd: 'updateTickets', newVal: newNumberData})
    }

    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.departure}</h1>
            <h2>{props.destination}</h2>
            <p>{props.duration}</p>
            <p>{props.cost}</p>
            <p>{ticketState}</p>
            <button onClick={()=> setTicketState(setTicketState(ticketState - 1),
                                    changeTicketHandler(newNumberData = { 
                                                        ticketId: props.id,
                                                        newTicketNum: ticketState
                                }))}>buy ticket</button>
        </section>
    )
}

export default TicketDetail;