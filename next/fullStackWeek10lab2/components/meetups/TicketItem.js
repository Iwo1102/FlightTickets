import Card from '../ui/Card';
import classes from './TicketItem.module.css';
import { useRouter } from 'next/router';

function TicketItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
    console.log(props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
          <img src={props.image} alt={props.desitnation} />
        </div>
        <div className={classes.content}>
          <p>{props.departure} - {props.destination}</p>
          <p>Starting from €{props.cost}</p>
          <p>Flight duration: {props.duration}</p>
          <div className={classes.actions}>
          <button className={classes.actions} onClick={showDetailsHandler}>Show Details</button>
        </div>
        </div>
      </Card>
    </li>
  );
}

export default TicketItem;
