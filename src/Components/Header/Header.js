import { NavLink } from 'react-router-dom';
import Logo from '@/Assets/Images/Logo.png';

const Header = () => {
    return (
        <header>
            <NavLink to="/home">
                <img src={Logo} alt="Logo" />
            </NavLink>            <nav>
                <ul>
                    <li className='Accueil'>
                        <NavLink to="/home" activeclassname="active">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apropos" activeclassname="active">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;