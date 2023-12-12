import TicketDetail from '../../components/meetups/TicketDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null

    /*for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        let temp = globalCtx.theGlobalObject.meetings[ii]
        if (temp.meetingId.trim() == router.query.meetupId.trim()) {
            returnVal = <MeetupDetail image={temp.image} title={temp.title} description={temp.description} />
        }
    }*/

    for (let ii = 0; ii < globalCtx.theGlobalObject.tickets.length; ii++) {
        let temp = globalCtx.theGlobalObject.tickets[ii]
            returnVal = <TicketDetail image={temp.image}
            departure={temp.departure}
            destination={temp.destination}
            duration={temp.duration}
            cost={temp.cost}
            ticketNumber={temp.ticketNumber} 
            departureTime={temp.departureTime}
            ticketId={temp.ticketId}/>
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
