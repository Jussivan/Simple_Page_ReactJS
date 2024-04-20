import styles from './Loading.module.css'
import Loader from '../img/Loading.jpg'

function Loading(){
    return(
        <div className={styles.loader_container}>
            <ul>
                <li><h1>Carregando ...</h1></li>
                <li><img src={Loader}/></li>
            </ul>
        </div>
    )
}

export default Loading;