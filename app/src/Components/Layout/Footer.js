import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    return(<footer className={styles.footer}>
        <div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='https://github.com/Jussivan'><FaGithub/></Link>
                </li>
                <li className={styles.item}>
                <Link to='https://www.instagram.com/jussivan_27'><FaInstagram/></Link>
                </li>
                <li className={styles.item}>
                    <Link to='https://www.linkedin.com/in/jussivan-bezerra-matos-49254228b/'><FaLinkedin/></Link>
                </li>
            </ul>
            <span>Jussivan B. Matos</span>
        </div>
    </footer>)
}

export default Footer;