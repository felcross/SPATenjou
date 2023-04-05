import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Clãs
                </MenuLink>
                <MenuLink to="/combate">
                   Combate
                </MenuLink>
                <MenuLink to="/historia">
                   Historia
                </MenuLink>
                <MenuLink to="/tabeladepoderes">
                   Poderes
                </MenuLink>
            </nav>
        </header>
    )
}