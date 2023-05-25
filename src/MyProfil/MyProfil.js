import { useState } from 'react';
import style from './myprofil.module.css';


function MyProfil(){
    
let [myUser, setMyUser] = useState('');

setTimeout(() => console.log(myUser), 5000);
    if(!myUser){
        fetch('http://localhost:8080/myProfil/getUser', {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json', 
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            },
            body : JSON.stringify({mail : localStorage.getItem('mail')})
        }).then((response) => response.json()).then((data) => {setMyUser(data); })
    
    }

    function photo(){
        if(myUser.pictures && myUser.pictures.length > 0){
            return myUser.pictures[0].link;
        }else{
            return 'avatar.png';
        }
    }

    function userGenre(){
        if(myUser && myUser.gender === "M"){
            return "Homme";

        }else if(myUser && myUser.gender === "F"){
            return "Femme";
        }
        else{
            return 'Inconnu'
        }
    }

    function userTaille(){
        if(myUser){
            return myUser.size;

        }
        else{
            return '...'
        }
    }

    function userDescription(){
        if(myUser){
            return myUser.description;
        }else{
            return "...";
        }
    }


    return(
    <div className={style.container}>

        <div className={style.bloc1}>
            <img className={style.photo} src={photo()} alt="ma photo"></img>
            <div className={style.pseudodate}>
                <img className={style.appareilphoto} src="camera.png"></img>
                <p> {myUser.pseudo} {myUser.date_of_birth}</p>
                <img className={style.poubelle} src="poubelle.jpg"></img>
            </div>
        </div>

        <div className={style.bloc2}>
            <p>Genre {userGenre()}</p>
            <div className={style.bloctaille}>
                <p> Taille : {userTaille()} cm</p>
                <input type="text" className={style.tailleinput}></input>
                <img className={style.crayon} src="crayon.png" alt="modifier ma taille"></img>
            </div>
            <p>Description</p>
            <div>
                <input className={style.descriptioninput}></input>
                <p>{userDescription()}</p>
                <img className={style.crayon} src="crayon.png" alt="modifier ma description"></img>
            </div>
        </div>
        

    </div>)
}

export default MyProfil;