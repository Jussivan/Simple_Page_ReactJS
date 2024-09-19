import styles from './Submit.module.css'

function Submit({funcao,icone, text}) {
    return(
    <div>
      <button onClick={funcao} className={styles.btn}>{icone}{text}</button>
    </div>
    )
}

export default Submit;