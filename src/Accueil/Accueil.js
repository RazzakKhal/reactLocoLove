import { useState } from "react";
import style from './accueil.module.css';

function Accueil(){

    let [mail, setMail] = useState("");
    let [password, setPassword] = useState("");
    let [trainNumber, setTrainNumber] = useState("");
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [pseudo, setPseudo] = useState("");
    let [dateOfBirth, setDateOfBirth] = useState("");
    let [gender, setGender] = useState("");

    function connexionFormSubmit(event){
        event.preventDefault();
        
    }

    function inscriptionFormSubmit(event){
        event.preventDefault();

    }



    return(
        <div className={style.container}>
            {/* formulaire de connexion */}

            <form onSubmit={(event) => connexionFormSubmit(event)}>
                <p className={style.formTitle}>Connexion</p>
                <div className={style.labelInput}>
                <input type="text" value={mail} placeholder="Mail" onChange={(event) => setMail(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="text" value={password} placeholder="Mot de passe" onChange={(event) => setPassword(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="text" value={trainNumber} placeholder="Numéro de train" onChange={(event) => setTrainNumber(event.target.value)}></input>
                </div>

                <button type="submit">Connexion</button>
            </form>

            {/* formulaire d'inscription */}
            <form onSubmit={(event) => inscriptionFormSubmit(event)}>
            <p className={style.formTitle}>Inscription</p>
            <div className={style.labelInput}>
                <input type="text" value={firstname} placeholder="Prenom" onChange={(event) => setFirstname(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="text" value={lastname} placeholder="Nom" onChange={(event) => setLastname(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
 
                <input type="text" value={pseudo} placeholder="pseudo" onChange={(event) => setPseudo(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="text" value={dateOfBirth} placeholder="Date de Naissance" onChange={(event) => setDateOfBirth(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="text" value={mail} placeholder="Mail" onChange={(event) => setMail(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="text" value={password} placeholder="Mot de passe" onChange={(event) => setPassword(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="text" value={gender} placeholder="Genre" onChange={(event) => setGender(event.target.value)}></input>
                </div>

                <button type="submit">Inscription</button>
            </form>


        </div>
    );

}

export default Accueil;