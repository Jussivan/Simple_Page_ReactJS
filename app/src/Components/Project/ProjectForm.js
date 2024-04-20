import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function ProjectForm({handleSubmit, projectData}) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});
    useEffect(() => {
    fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data);
    })
    .catch((err) => console.log(err))
    }, []);

    const submit = (e) => {
        e.preventDefault();
        //console.log(project);
        handleSubmit(project);
    }

    function handleChange(e) {
        setProject({...project,[e.target.name]: e.target.value});
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }});
    }

    return(
        <form onSubmit={submit} className={styles.pf_container}>
            <Input
            type='text'
            text='Nome do Projeto'
            name='name'
            placeholder='Insira o Nome do Projeto'
            handleOnChange={handleChange}
            value={project.name ? project.name: ''}
            />
            <Input
            type='number'
            text='Orçamento do Projeto'
            name='budget'
            placeholder='Insira o Orçamento do Projeto'
            handleOnChange={handleChange}
            value={project.budget ? project.budget: ''}
            />
            <Select
            name='category_id'
            text='Selecione a Categoria'
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            <Submit
            text='Criar Projeto'
            />
        </form>
    )
}

export default ProjectForm;