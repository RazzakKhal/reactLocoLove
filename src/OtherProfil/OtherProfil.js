import { useParams } from "react-router-dom";
import { useState } from "react";
import style from "./otherprofil.module.css";

function OtherProfil(){

    const { id } = useParams();
    let [myUser, setMyUser] = useState('');
    let host = 'http://localhost:8080';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    // récupération de l'utilisateur
    if(!myUser){
        fetch(`${host}/otherProfil/user/${id}`, {
            method : 'GET',
            headers : headers
        })
        .then(response => response.json())
        .catch(() => console.log('ooops'))
        .then(data => setMyUser(data));

    }
   

  return myUser ?  (
        <div className={style.container}>
            <div className={style.bloc1}>
                <img src={myUser.pictures.length > 0 ? myUser.pictures[0].link : "avatar.png"} className={style.profilPicture}></img>
                <div className={style.pseudoAgeCom}>
                    <p>{myUser.pseudo}</p>
                    <p>{new Date(myUser.date_of_birth).toLocaleDateString('fr')}</p>
                    <img className={style.message} src="message.png" alt="envoyer un message"></img>
                </div>
            </div>
            <div className={style.bloc2}>
                <div>
                    <p>Genre</p>
                    <p>{myUser.gender}</p>
                </div>
                <div>
                    <p>Taille</p>
                    <p>{myUser.size}</p>
                </div>
                <p>Description</p>
                <p>{myUser.description}</p>
            </div>
        </div>
    )

    :

     (<div>
        l'utilisateur n'a pas pu être trouvé.
    </div>)

}

export default OtherProfil;