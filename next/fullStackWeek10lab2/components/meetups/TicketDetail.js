import { useState } from 'react';
import classes from './TicketDetail.module.css';

function TicketDetail(props) {
    const [ticketState, setTicketState] = useState(parseInt(props.ticketNumber));

    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <div className={classes.detailContainer}>
                <div className={classes.contentBox}>
                    <h1>From {props.departure}</h1>
                    <h2>To {props.destination}</h2>
                    <h3>Flight Duration: {props.duration}</h3>
                    <p>Price: €{props.cost}</p>
                    <p>Hurry, Only {ticketState} Tickets Left!</p>
                    <button onClick={() => setTicketState(ticketState - 1)}>buy ticket</button>
                </div>
            </div>
        </section>
    );
}

export default TicketDetail;