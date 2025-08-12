import Logo from '../assets/Logo-SportSee.svg'
import '../styles/Header.scss'

export function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Logo SportSee"></img>
            <nav>
                <a href="">Accueil</a>
                <a href="">Profil</a>
                <a href="">Réglage</a>
                <a href="">Communauté</a>
            </nav>
        </div>
    )
}