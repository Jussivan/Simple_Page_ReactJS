import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    return(<footer className={styles.footer}>
        <div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='https://www.facebook.com/minecraft'><FaFacebook/></Link>
                </li>
                <li className={styles.item}>
                <Link to='https://www.instagram.com/jussivan_27'><FaInstagram/></Link>
                </li>
                <li className={styles.item}>
                    <Link to='https://br.linkedin.com/in/jairmessiasbolsonaro'><FaLinkedin/></Link>
                </li>
            </ul>
            <span>Farmador</span>
        </div>
    </footer>)
}

export default Footer;