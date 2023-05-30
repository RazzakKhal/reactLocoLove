import { useState } from 'react';
import style from './myprofil.module.css';


function MyProfil() {

    let [myUser, setMyUser] = useState('');
    let host = 'http://localhost:8080';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    let sizeInput = document.querySelector('#sizeInput');
    let descriptionInput = document.querySelector('#descriptionInput');
    let trainNumberInput = document.querySelector('#trainNumberInput');
    let carNumberInput = document.querySelector('#carNumberInput');
    let pictureInput = document.querySelector('#pictureInput');



    // récupération de l'utilisateur

    if (!myUser) {
        fetch(`${host}/myProfil/getUser`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ mail: localStorage.getItem('mail') })
        }).then((response) => response.json()).then((data) => { setMyUser(data); })

    }

    // FONCTIONS D'AFFICHAGES

    function picture() {
        if (myUser.pictures && myUser.pictures.length > 0) {
            return myUser.pictures[0].link;
        } else {
            return 'avatar.png';
        }
    }

    function userGender() {
        if (myUser && myUser.gender === "M") {
            return "Homme";

        } else if (myUser && myUser.gender === "F") {
            return "Femme";
        }
        else {
            return 'Inconnu'
        }
    }

    function userSize() {
        if (myUser) {
            return myUser.size;

        }
        else {
            return '...'
        }
    }

    function userDescription() {
        if (myUser) {
            return myUser.description;
        } else {
            return "...";
        }
    }

    function userTrain() {
        if (myUser) {
            return myUser.train_number;
        } else {
            return "...";
        }
    }

    function userCar() {
        if (myUser) {
            return myUser.car_number;
        } else {
            return "...";
        }
    }


    // FONCTIONS DE MODIFICATION DES DONNEES 

    function updateSize() {

        fetch(`${host}/myProfil/updateSize`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                mail: myUser.mail,
                size: sizeInput.value
            })
        }).then((response) => response.json()).then((data) => { setMyUser(data); sizeInput.value = ''; })

    }

    function updateDescription() {
        fetch(`${host}/myProfil/updateDescription`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                mail: myUser.mail,
                description: descriptionInput.value
            })
        }).then((response) => response.json()).then((data) => { setMyUser(data); descriptionInput.value = ''; })
    }

    function updateTrainNumber() {
        fetch(`${host}/myProfil/updateNumberTrain`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                mail: myUser.mail,
                train_number: trainNumberInput.value
            })
        }).then((response) => response.json()).then((data) => { setMyUser(data); trainNumberInput.value = ''; })
    }

    function updateCarNumber() {
        fetch(`${host}/myProfil/updateCarTrain`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                mail: myUser.mail,
                car_number: carNumberInput.value
            })
        }).then((response) => response.json()).then((data) => { setMyUser(data); carNumberInput.value = ''; })
    }


    // FONCTIONS AJOUT ET SUPPRESSION DE LA PHOTO



    // ajout photo 

    function handleSelected(e) {

        const selectedFile = e.target.files[0];
        if (selectedFile) {
            readPicture(selectedFile);
            e.target.value = null;
        };

    }



    function readPicture(selectedFile) {
        const reader = new FileReader();

        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                let myPicture = reader.result;

                fetch(`${host}/picture/addpicture`, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({ link: myPicture, user: myUser }),
                })
                    .then((response) => response.json())
                    .then((data) => {

                        setMyUser({ ...myUser, pictures: data });



                    });
            }

        };



    }

    // suppression photo
    function deletePicture() {
        fetch(`${host}/picture/deletepicture/${myUser.pictures[0].id}`, {
            method: "DELETE",
            headers: headers,
            body:
                JSON.stringify(myUser)

        }).then(response => response.json()).then((data) => {

            setMyUser({ ...myUser, pictures: myUser.pictures.slice(1) });

        })
    }

    // RETURN DE MON COMPOSANT


    return (
        <div className={style.container}>

            <div className={style.bloc1}>
                <input className={style.pictureInput} onChange={(e) => handleSelected(e)} type="file" accept="image/png, image/jpeg, image/jpg" ></input>
                <img className={style.appareilphoto} src="camera.png"></img>
                <div className={style.imgdiv}>

                    <img className={style.photo} id="maphoto" src={picture()} alt="ma photo"></img>
                    <p> {myUser.pseudo} {myUser.date_of_birth}</p>
                </div>




                <img className={style.poubelle} src="poubelle.jpg" onClick={() => deletePicture()}></img>

            </div>

            <div className={style.bloc2}>
                <p>Genre {userGender()}</p>
                <div className={style.bloctaille}>
                    <p> Taille : {userSize()} cm</p>
                    <input type="text" className={style.tailleinput} id="sizeInput"></input>
                    <img onClick={() => updateSize()} className={style.crayon} src="crayon.png" alt="modifier ma taille"></img>
                </div>
                <div className={style.blocDescription}>
                    <p>Description</p>

                    <input className={style.descriptioninput} id="descriptionInput"></input>
                    <p>{userDescription()}</p>
                    <img onClick={() => updateDescription()} className={style.crayon} src="crayon.png" alt="modifier ma description"></img>

                </div>
            </div>

            <div className={style.bloc3}>
                <p> Numero de train : {userTrain()} <input id="trainNumberInput"></input> <img onClick={() => updateTrainNumber()} className={style.crayon} src="crayon.png" alt="modifier mon numéro de train"></img></p>
                <p> Numero de voiture : {userCar()} <input id="carNumberInput"></input> <img onClick={() => updateCarNumber()} className={style.crayon} src="crayon.png" alt="modifier mon numéro de voiture"></img></p>
            </div>

        </div>)
}

export default MyProfil;