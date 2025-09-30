import type {JSX} from "react"
import style from './NavBar.module.css
export default function NavBar():JSX.Element {
  return (
   <nav className={style.navigation}>
   
   <ul className={style.list}>
   <li className={style.listElement}> 
    <NavLink to="/alcohol" className={style.link}>
    <Alcohol></Alcohol>
    </NavLink>
   </li>
   </ul>
  )
}
