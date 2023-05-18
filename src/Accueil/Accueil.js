import { useState } from "react";
import User from '../Classes/User';
import Validators from "../ValidatorsPerso/Validators";

import style from './accueil.module.css';

function Accueil(){
    let validators = new Validators();
    let [mailMessage, setMailMessage] = useState("");
    let [passwordMessage, setPasswordMessage] = useState("");
    let [inscriptionMessage, setInscriptionMessage] = useState("");

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
        let user = new User(firstname, lastname, pseudo, dateOfBirth, mail, password, gender);

        if(firstname && lastname && pseudo && dateOfBirth && mail && password && gender && !mailMessage && !passwordMessage){
            fetch("http://localhost:8080/accueil/inscription", {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(user)
    
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }else{
            setInscriptionMessage("Veuillez Remplir tous les champs correctement");
        }

 
        

    }


    function mailValidation(value){
        if(value){
            setMailMessage("");
        }else{
            setMailMessage("Votre mail ne semble pas valide");
        }
    }

    function passwordValidation(value){
        if(value){
            setPasswordMessage("");
        }else{
            setPasswordMessage("Votre mot de passe doit contenir au moins un minuscule, un majuscule, un chiffre et un caractère special");
        }
    }


    return(
        <div className={style.container}>
            {/* formulaire de connexion */}

            <form onSubmit={(event) => connexionFormSubmit(event)}>
                <p className={style.formTitle}>Connexion</p>
                <div className={style.labelInput}>
                <input type="mail" value={mail} placeholder="Mail" onChange={(event) => {setMail(event.target.value); }}></input>
                
                </div>

                <div className={style.labelInput}>
                <input type="password" value={password} placeholder="Mot de passe" onChange={(event) => {setPassword(event.target.value); }}></input>
                
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
                <input type="date" value={dateOfBirth} placeholder="Date de Naissance" onChange={(event) => setDateOfBirth(event.target.value)}></input>
                </div>

                <div className={style.labelInput}>
                <input type="mail" value={mail} placeholder="Mail" onChange={(event) =>{ setMail(event.target.value); mailValidation(validators.mailValidator(event.target.value))}}></input>
                <span className={style.errorMessage}>{mailMessage}</span>
                </div>

                <div className={style.labelInput}>
                <input type="password" value={password} placeholder="Mot de passe" onChange={(event) => {setPassword(event.target.value); passwordValidation(validators.passwordValidator(event.target.value))}}></input>
                <span className={style.errorMessage}>{passwordMessage}</span>
                </div>

                <div className={style.labelInput}>
                    <select placeholder="Genre" onChange={(event) => setGender(event.target.value)} >
                    <option value="M">Homme</option>
                    <option value="F">Femme</option>
                    </select>
                </div>

                <button type="submit">Inscription</button>
                <span className={style.errorMessage}>{inscriptionMessage}</span>
            </form>


        </div>
    );

}

export default Accueil;