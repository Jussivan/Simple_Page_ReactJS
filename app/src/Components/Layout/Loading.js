import styles from './Loading.module.css'
import Loader from '../img/Loading.svg'

function Loading(){
    return(
        <div className={styles.loader_container}>
            <ul>
                <li><img src={Loader}/></li>
                <li><h5>CARREGANDO</h5></li>
            </ul>
        </div>
    )
}

export default Loading;