import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styles from "./Projects.module.css"
import { useLocation } from "react-router-dom"
import Container from '../Layout/Container'
import Message from '../Layout/Message'
import ProjectCard from '../Project/ProjectCard'
import NoProject from '../Project/NoProject'
import Loading from '../Layout/Loading'

function Projects() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    const location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state.message;
    }

    useEffect(()=> {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(resp => resp.json())
            .then(data => {
                setProjects(data);
                setRemoveLoading(true);
            })
            .catch(err => console.log(err))
            {projects.length==0 && <NoProject/>}
        }, 3000)
    })

    function removeProject(id) {
        fetch('http://localhost:5000/projects/${id}', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },   
        }).then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.projects_container}>
            <h1 className={styles.title_container}>Meus Projetos</h1>
            {message && <Message type='success' msg={message}/>}
            <div className={styles.oldproject_container}>
                <Container customClass='start'>
                    {projects.length > 0 &&
                        projects.map((project) => (
                            <ProjectCard project={project} key={project.key} handleRemove={removeProject}/>
                    ))}
                    {!removeLoading && <Loading/>}
                </Container>
            </div>
            <div className={styles.newproject_container}>
                <Link className={styles.btn} to='/NewProject'>Novo Projeto</Link>
            </div>
        </div>
    )
}

export default Projects;