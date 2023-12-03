import TicketItem from './TicketItem';
import classes from './TicketList.module.css';

function TicketList(props) {
  return (
    <ul className={classes.list}>
      {props.tickets.map((tickets) => (
        <TicketItem
          id={tickets.ticketId}
          image={tickets.image}
          depature={tickets.depature}
          destination={tickets.destination}
          cost={tickets.cost}
        />
      ))}
    </ul>
  );
 /* return (
    <ul className={classes.list}>
      <TicketItem
          id={tickets.ticketId}
          image={tickets.image}
          depature={tickets.depature}
          destination={tickets.destination}
          cost={tickets.cost}
        />
    </ul>

  );*/
}

export default TicketList;
