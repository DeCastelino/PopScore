import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navigationMenu}>
            <a href="#movies" className={styles.menuItemActive}>
                <span>Movies</span>
            </a>
            <a href="#tvshows" className={styles.menuItem}>
                <span>TV Shows</span>
            </a>
            <a href="#search" className={styles.menuItemSearch}>
                <i className={styles.searchIcon}>🔍</i>
            </a>
        </div>
    );
};

export default Navbar;
