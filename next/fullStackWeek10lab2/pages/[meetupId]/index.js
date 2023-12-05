import TicketDetail from '../../components/meetups/TicketDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.tickets.length; ii++) {
        let temp = globalCtx.theGlobalObject.tickets[ii]
       // if (temp.ticketId.trim() == router.query.ticketId.trim()) { //******NEED TO MODIFY NEW MEETUP FORM******
            returnVal = <TicketDetail image={temp.image} departure={temp.departure} destination={temp.destination} />
        //}
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}