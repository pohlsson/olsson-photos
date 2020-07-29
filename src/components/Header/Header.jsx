import React from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {FaImages, FaHome} from 'react-icons/fa';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Peter Photos</h1>
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
