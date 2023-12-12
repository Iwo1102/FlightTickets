import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import HamMenuFAB from "../generic/HamMenuFAB"
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import HamMenuContent from "./HamMenuContent"
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({cmd: 'hideHamMenu', newVal: false})
  }


  const contents = []
  globalCtx.theGlobalObject.tickets.forEach(element => {
    contents.push({title: element.destination, webAddress: '/' + element.ticketId })
  });

  return (
    <header className={classes.header}>
      <HamMenuContent contents={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <HamMenuFAB toggleMenuHide={() => toggleMenuHide()} />
        <h1 className = {classes.logoText}>RyanLingus</h1>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
