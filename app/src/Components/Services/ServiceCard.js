import styles from './ServiceCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function ServiceCard({service, key, handleRemove, handleEdit}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(service.id, service.budget)
    }
    return(
        <ul className={styles.sc_container} style={{padding:"10px"}}>
            <p>ID do SERVIÇO:</p><li className={styles.sc_item}>{service.id}</li>
            <p>NOME do SERVIÇO:</p><li className={styles.sc_item}>{service.name}</li>
            <p>CUSTO do SERVIÇO:</p><li className={styles.sc_item}>{service.budget}</li>
            <p>DESCRIÇÃO do SERVIÇO:</p><li className={styles.sc_item}>{service.description}</li>
            <li className={styles.sc_icones}>
            <Link className={styles.btn} to={'/projects/'+service.id}><BsPencil/> EDITAR</Link>
            <Link className={styles.btn} onClick={remove}><BsFillTrashFill/> APAGAR</Link>
            </li>
        </ul>
    )
}

export default ServiceCard;