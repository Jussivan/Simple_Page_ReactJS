import {useState} from 'react';
import styles from './ServicesForm.module.css'
import Input from '../form/Input'

function ServicesForm({projectData,icone,btnText,handleSubmit}) {
    const [service, setService] = useState({});
    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }
    function handleChange(e) {
        setService({...service,[e.target.name]: e.target.value});
    }
    return(
        <form onSubmit={submit} className={styles.sf_container}>
            <Input
            type='text'
            text='Nome do Serviço'
            name='name'
            placeholder='Insira o Nome do Serviço'
            handleOnChange={handleChange}
            />
            <Input
            type='number'
            text='Custo do Serviço'
            name='budget'
            placeholder='Insira o Custo do Serviço'
            handleOnChange={handleChange}
            />
            <Input
            type='text'
            text='Descrição do Serviço'
            name='description'
            placeholder='Insira a Descrição do Serviço'
            handleOnChange={handleChange}
            />
            <button className={styles.btn}>{icone}{btnText}</button>
        </form>
    )
}

export default ServicesForm;