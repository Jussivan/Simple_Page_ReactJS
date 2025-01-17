import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../Project/ProjectForm'
import {BsFillFloppy2Fill} from 'react-icons/bs'

function NewProject() {
    const navigate = useNavigate();
    function createPost(project) {
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:3001/projects', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp)=>resp.json())
        .then((data)=> {
            console.log(data);
            //redirect
            const state = {message: "Projeto Criado com Sucesso!"};
            navigate('/projects', {state});
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className={styles.np_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seus Projetos e Gerencie os Serviços</p>
        <ProjectForm handleSubmit={createPost} btnText=" SALVAR" icone={<BsFillFloppy2Fill/>}/>
        </div>
    )
}

export default NewProject;