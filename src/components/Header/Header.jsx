import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {FaImages, FaHome} from 'react-icons/fa';
import HamburgerMenu from 'react-hamburger-menu';

const Header = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    useEffect(() => setHamburgerIsOpen(false), []);

    const toggleHamburger = () => {
        setHamburgerIsOpen(!hamburgerIsOpen);
    };

    return (
        <header className={styles.header}>
            <h1>Peter Photos</h1>
            <HamburgerMenu
                className={styles.hamburger}
                isOpen={hamburgerIsOpen}
                menuClicked={toggleHamburger}
                color='#f9fafc'
                strokeWidth={3}
                borderRadius={4}
                height={20}
            />
            {hamburgerIsOpen && (
                <div className={styles.hamburgerMenu}>
                    <Link to="/" className={styles.link} onClick={toggleHamburger}>
                        <FaHome/>
                        <p className={styles.linkText}>Hem</p>
                    </Link>
                    <Link to="/album" className={styles.link} onClick={toggleHamburger}>
                        <FaImages/>
                        <p className={styles.linkText}>Album</p>
                    </Link>
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
