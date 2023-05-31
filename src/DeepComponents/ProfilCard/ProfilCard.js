import style from './profilcard.module.css';

function ProfilCard(props) {

    return (
        <div className={style.container}>
            <img className={style.profilPicture} src={props.images[0].link} alt='photo de la personne'></img>
            <div className={style.description}>
                <div className={style.pseudoAge}>
                    <p>{props.pseudo}</p>
                    <p>{new Date(props.age).toLocaleDateString('fr')}</p>
                </div>

                <div >
                    <img className={style.coeur} src='coeur.png' alt='liker le profil'></img>
                </div>
            </div>
        </div>
    );

}

export default ProfilCard;