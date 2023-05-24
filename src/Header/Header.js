
import style from './header.module.css';


 
 function Header(){
    return(
        <ul>
        
        
            <li><img className={style.logo} src="imagetgv1.png" alt="logo"></img></li>
            <li>Galerie</li>
            <li>Mon Profil</li>
            <li> Mes Likes</li>
            <li><img className={style.deco} src="deconnexion.png" alt="deconnexion"></img></li>


        </ul>
    );
}

export default Header;