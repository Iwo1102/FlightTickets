import TicketList from '../components/meetups/TicketList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <TicketList tickets={globalCtx.theGlobalObject.tickets} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;