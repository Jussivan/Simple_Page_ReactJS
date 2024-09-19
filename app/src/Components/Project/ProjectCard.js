import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill, BsTrashFill} from 'react-icons/bs'
import Submit from '../form/Submit'
import {Link} from 'react-router-dom'

function ProjectCard({project, key, handleRemove, handleEdit}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(project.id)
    }
    return(
        <ul className={styles.pc_container} style={{padding:"10px"}}>
            <p>ID:</p><li className={styles.pc_item}>{project.id}</li>
            <p>NOME:</p><li className={styles.pc_item}>{project.name}</li>
            <p>ORÇAMENTO:</p><li className={styles.pc_item}>{project.budget}</li>
            <p>CATEGORIA:</p><li className={styles.pc_item}>{project.category.name}</li>
            <li className={styles.pc_icones}>
            <Link className={styles.btn} to={'/projects/'+project.id}><BsPencil/> EDITAR</Link>
            <Link className={styles.btn} onClick={remove}><BsFillTrashFill/> APAGAR</Link>
            </li>
        </ul>
    )
}

export default ProjectCard;