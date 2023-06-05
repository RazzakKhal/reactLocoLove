import style from './profilcard.module.css';
import {useNavigate } from 'react-router-dom';

function ProfilCard(props) {
    const navigate = useNavigate();
   function otherProfilRedirect(id){
    
    navigate(`/otherProfil/${id}`);
    }

    return (
        <div className={style.container}>
            <img onClick={() => otherProfilRedirect(props.id)} className={style.profilPicture} src={props.images[0].link} alt='photo de la personne'></img>
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