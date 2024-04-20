import styles from './NoProject.module.css'
import blitz from '../img/DoesNotCompute.png'

function NoProject() {
    return(
        <div className={styles.NOp_container}>
            <img src={blitz}/>
            <p>Você ainda não criou nenhum Projeto</p>
        </div>
    )
}

export default NoProject;