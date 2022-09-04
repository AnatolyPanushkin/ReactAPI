import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }
    return (
        <div className="CustomHeader">
        
        <h2>Search for quotes from the Simpsons</h2>

        <nav className='HeaderNav'>
            <ul>
                <li>
                    <NavLink className={setNavStyle} to="/about" ><em>About</em></NavLink>
                </li>
                <li>
                    <NavLink className={setNavStyle} to="/contacts" ><em>Contacts</em></NavLink>
                </li>
                <li>
                    <NavLink className={setNavStyle} to="/" ><em>Home</em></NavLink>
                </li>
            </ul>
                
        </nav> 
        </div>
        
    );
};

export default Header;