
import style from './header.module.css';
import { Link, useNavigate } from 'react-router-dom';

 
 function Header(){

    const navigate = useNavigate();
    return(
        <ul>
        
        
            <li><Link to="/"><img className={style.logo} src="imagetgv1.png" alt="logo"></img></Link></li>
            <li><Link className= {style.Link} to="/gallery">Galerie</Link></li>
            <li><Link className={style.Link} to="/myprofil">Mon Profil</Link></li>
            <li><Link className={style.Link} to="/mylikes"> Mes Likes</Link></li>
            <li><img onClick={() => {localStorage.removeItem('token'); navigate('/');}} className={style.deco} src="deconnexion.png" alt="deconnexion"></img></li>


        </ul>
    );
}

export default Header;