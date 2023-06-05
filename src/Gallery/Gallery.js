import ProfilCard from '../DeepComponents/ProfilCard/ProfilCard';
import style from './gallery.module.css';
import { useEffect, useState } from 'react';

function Gallery(){
   let [users, setUsers] = useState(''); 
   let [myUser, setMyUser] = useState('');
   let host = 'http://localhost:8080';
   let headers = {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.getItem('token')
   }
    // récupération de l'utilisateur
    if (!myUser) {
        fetch(`${host}/myProfil/getUser`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ mail: localStorage.getItem('mail') })
        }).then((response) => response.json()).then((data) => { setMyUser(data);  })

    }

    function getAllUsers(){
            // récupérer tous les utilisateur pour les transmettre a ProfilCard
    if(myUser.gender === 'F'){
 
        fetch(`${host}/galerie/homme/${myUser.id}`, {
            method : 'GET',
            headers : headers
        }).then(response => response.json()).then(data => {setUsers(data);});
    }else if(myUser.gender === 'M'){
        console.log('hoho')
        fetch(`${host}/galerie/femme/${myUser.id}`, {
            method : 'GET',
            headers : headers
        }).then(response => response.json()).then(data => {setUsers(data); });
    }else{

    }

    }

    useEffect(() => {
        getAllUsers();
    }, [myUser]);


    return(
    <div className={style.container}>
        { users ? users.map((user, index) => user.pictures.length > 0 ? <ProfilCard key={index} pseudo={user.pseudo} age={user.date_of_birth} images={user.pictures} id={user.id}></ProfilCard> : <ProfilCard key={index} pseudo={user.pseudo} age={user.date_of_birth} images={[{link : "avatar.png"}]} id={user.id}></ProfilCard> ) : null}

    </div>
    )
}

export default Gallery;