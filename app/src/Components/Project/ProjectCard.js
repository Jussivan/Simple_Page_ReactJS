import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill, BsTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function ProjectCard({project, key, handleRemove}) {
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
            <button className={styles.pc_icones}><BsPencil/> EDITAR</button>
            <button className={styles.pc_icones} onClick={remove}><BsTrashFill/> APAGAR</button>
        </ul>
    )
}

export default ProjectCard;