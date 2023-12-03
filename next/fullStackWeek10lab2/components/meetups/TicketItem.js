import Card from '../ui/Card';
import classes from './TicketItem.module.css';
import { useRouter } from 'next/router';

function TicketItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.desitnation} />
        </div>
        <div className={classes.content}>
          <h3>{props.desitnation}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
 // return (<div>Test</div>)
}

export default TicketItem;
