import React, {useState} from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {FaImages, FaHome} from 'react-icons/fa';
import HamburgerMenu from 'react-hamburger-menu';

const Header = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    const handleHamburgerClicked = () => {
        setHamburgerIsOpen(!hamburgerIsOpen);
    };

    return (
        <header className={styles.header}>
            <h1>Peter Photos</h1>
            <HamburgerMenu
                className={styles.hamburger}
                isOpen={hamburgerIsOpen}
                menuClicked={handleHamburgerClicked}
                color='#f9fafc'
                strokeWidth={3}
                borderRadius={4}
                height={20}
            />
            {hamburgerIsOpen && (
                <div className={styles.hamburgerMenu}>
                    <div className={styles.link}>
                        <Link to="/">
                            <FaHome/>
                        </Link>
                    </div>
                    <div className={styles.link}>
                        <Link to="/album">
                            <FaImages/>
                        </Link>
                    </div>
                </div>
            )}
            <div className={styles.links}>
                <div className={styles.link}>
                    <Link to="/">
                        <FaHome/>
                    </Link>
                </div>
                <div className={styles.link}>
                    <Link to="/album">
                        <FaImages/>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;
