import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../img/dollar.png'
import { IoHomeSharp } from "react-icons/io5";
import { PiFilesFill } from "react-icons/pi";
import { HiBuildingOffice } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";

function Navbar() {
    return(
      <nav class={styles.navbar}>
        <div class={styles.coin}>
          <img src={logo}/>
        </div>
        <li className={styles.item_home}>
          <Link to='/'><IoHomeSharp/> HOME</Link>
        </li>
        <li className={styles.item_projects}>
          <Link to='/Projects'><PiFilesFill/> PROJETOS</Link>
        </li>
        <li className={styles.item_empresa}>
          <Link to='/Empresa'><HiBuildingOffice/> EMPRESA</Link>
        </li>
        <li className={styles.item_contato}>
          <Link to='/Contato'><RiContactsFill/> CONTATO</Link>
        </li>
      </nav>
    )
}

export default Navbar;