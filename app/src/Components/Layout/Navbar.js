import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../img/dollar.png'

function Navbar() {
    return(
      <nav class={styles.navbar}>
        <Container>
          <img class={styles.coin} src={logo}/>
        <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/'>HOME</Link>
        </li>
        <li className={styles.item}>
          <Link to='/Projects'>PROJETOS</Link>
        </li>
        <li className={styles.item}>
          <Link to='/Empresa'>EMPRESA</Link>
        </li>
        <li className={styles.item}>
          <Link to='/Contato'>CONTATO</Link>
        </li>
      </ul>
      </Container>
      </nav>
    )
}

export default Navbar;