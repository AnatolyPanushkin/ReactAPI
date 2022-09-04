import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

    let count =0;
    return (
        <nav>
            <ul>
                <li><NavLink className={setNavStyle} to="/quote" ><em>Generate random quote</em></NavLink></li>
                <li><NavLink className={setNavStyle} to="/filteredQuote" ><em>Find quote by name of character</em></NavLink></li>
            </ul>
        </nav>
    );
}