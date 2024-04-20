import styles from './home.module.css'
import {Link} from 'react-router-dom'
import blitz from '../img/Blitz.png'

function Home() {
    return (
        <section className={styles.home_container}>
        <h1>Olá! Bem-Vindo ao <span>Costs</span></h1>
        <p>Crie e Gerencie seus Projetos de forma <span>Rápida</span> e <span>Segura</span>.</p>
        <Link className={styles.btn} to='/NewProject'>Novo Projeto</Link>
        <img src={blitz}></img>
        </section>
    )
}

export default Home;