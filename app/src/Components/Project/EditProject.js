import {parse, v4 as uuidv4} from 'uuid'
import styles from "./EditProject.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from '../Layout/Loading'
import {BsFillFloppy2Fill} from 'react-icons/bs'
import ProjectForm from '../Project/ProjectForm'
import Message from '../Layout/Message'
import ServicesForm from '../Services/ServicesForm'
import Container from '../Layout/Container'
import ServiceCard from '../Services/ServiceCard'

function EditProject() {
    const {id} = useParams()
    const [Project, setProject] = useState([])
    const [message, setMessage] = useState()
    const [Services, setServices] = useState([])
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/projects/'+id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setServices(data.services)
            })
            .catch((err) => console.log)
        }, 3000)
    }, [id]) 

    function editPost(Project) {
        if(Project.budget < Project.cost) {
            setMessage('Orçamento Inválido !')
            setType('error')
            return false
        } else {
            fetch('http://localhost:5000/projects/'+Project.id, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(Project),
            })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setMessage('Projeto Atualizado com Sucesso !')
                setType('success')
            })
            .catch(err => console.log(err))
        }
    }

    
    function removeService(id, cost) {
        var Delete = window.confirm("Deseja Deletar permanentemente esse Serviço ?");
        if(Delete == true) {
            const servicesUpdated = Project.services.filter(
                (service) => service.id !== id
            )

            const projectUpdated = Project
            projectUpdated.services = servicesUpdated
            projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

            fetch('http://localhost:5000/projects/' + projectUpdated.id, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(projectUpdated)
            }).then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage('Serviço Removido com Sucesso!')
                setType('success')
            }).catch(err => console.log(err))
        }
    }

    function createService(project) {
        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        if(newCost > parseFloat(project.budget)) {
            setMessage("Orçamento Ultrapassado!");
            setType('error');
            project.services.pop();
            return false;
        } else {
            project.cost = newCost;
            fetch('http://localhost:5000/projects/'+project.id , {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(project),
            })
            .then((resp) => resp.json())
            .then((data) => {
                setMessage("Serviço Adicionado com Sucesso!");
                setType('success');
            })
            .catch((err) => console.log(err))
            setMessage(null)
            setType(null)
        }
    }

    return (Project.name ? (
        <div className={styles.ec_body}>
        {message && <Message type={type} msg={message}/>}

            <div className={styles.ec_bodyI}>
                <div className={styles.ec_container}>
                <h2 className={styles.editText}>Edite o Projeto:</h2>
                    <ProjectForm
                        projectData={Project}
                        handleSubmit={editPost}
                        icone={<BsFillFloppy2Fill/>}
                        btnText=" SALVAR"/>
                </div>
                <div className={styles.sc_container}>
                <h2 className={styles.serviceText}>Adicione um Serviço:</h2>
                <ServicesForm projectData={Project} icone={<BsFillFloppy2Fill/>} btnText=' SALVAR' handleSubmit={createService}/>
                </div>
            </div>
            <div className={styles.ec_bodyII}>
                <details className={styles.oldservice_container}>
                    <summary><b>SERVIÇOS SALVOS</b></summary>
                    <Container customClass='start'>
                        {Services.length > 0 &&
                            Services.map((service) => (
                            <ServiceCard service={service} handleRemove={removeService}/>
                        ))}
                    </Container>
                </details>
            </div>
        </div>
    ): <div className={styles.Loading}>
        <Loading/>
    </div>)
}

export default EditProject;