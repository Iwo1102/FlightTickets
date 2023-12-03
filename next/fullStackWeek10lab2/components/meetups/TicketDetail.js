import classes from './TicketDetail.module.css'

function TicketDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.departure} - {props.destination}</h1>
            <p>{props.duration}</p>
            <p>{props.cost}</p>
            <p>{props.ticketNumber}</p>
        </section>
    )
}

export default TicketDetail