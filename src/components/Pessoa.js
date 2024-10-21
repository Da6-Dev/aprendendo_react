import styles from './Pessoa.module.css'

function Pessoa({profileImage, name, work}){
    return(
        <div className={styles.cardProfile}>
            <img className={styles.imgProfile} src={profileImage} alt={"Foto de perfil de " + name}/>
            <h1 className={styles.nameProfile}>Nome: {name}</h1>
            <p className={styles.workProfile}>Trabalho: {work}</p>
        </div>
    )
}

export default Pessoa;