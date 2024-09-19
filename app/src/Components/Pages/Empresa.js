import styles from './Empresa.module.css'
import imagem1 from '../img/IMG1.png'
import imagem2 from '../img/IMG2.png'
import imagem3 from '../img/IMG3.png'

function Empresa() {
    return (
        <div className={styles.BodyEmp}>
            <h1>Quem somos ?</h1>
            <div className={styles.Carrossel}>
                <img src={imagem1}></img>
            </div>
            <p className={styles.text1}>Fundada em 2010, nossa empresa nasceu com a missão de revolucionar o gerenciamento de projetos no Brasil.
            Iniciamos nossas atividades focando em setores como construção civil e tecnologia da informação,
            rapidamente ganhando reconhecimento pela excelência e eficiência em nossos serviços.</p>

            <p className={styles.text2}>Com o passar dos anos, expandimos nossa atuação para diversas áreas, incluindo energia renovável e infraestrutura urbana.
            Investimos em tecnologia de ponta, desenvolvendo uma plataforma própria de gerenciamento de projetos que permite
            aos nossos clientes acompanhar o progresso em tempo real.</p>
            
            <p className={styles.text3}>Hoje, somos reconhecidos como líderes no setor de gerenciamento de projetos, conhecidos por nossa inovação,
            confiança e contribuição para um futuro sustentável.
            Trabalhamos incansavelmente para transformar ideias em realidade, sempre superando as expectativas de nossos clientes.</p>
        </div>
    )
}

export default Empresa;