import TicketItem from './TicketItem';
import classes from './TicketList.module.css';

function TicketList(props) {
  return (
    <ul className={classes.list}>
      {props.tickets.map((ticket) => (
        <TicketItem
        key={ticket._id}
        id={ticket.ticketId}
        image={ticket.image}
        departure={ticket.departure}
        destination={ticket.destination}
        duration={ticket.duration}
        cost={ticket.cost}
        />
      ))}
    </ul>
  );
}

export default TicketList;
