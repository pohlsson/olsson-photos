import styles from './SideMenu.module.scss';
import React from "react";
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {FaImages, FaHome} from 'react-icons/fa';

const SideMenu = ({align}) => {
    return (
        <div className={classNames(styles.sideMenu, align ==='left' ? styles.alignLeft : styles.alignRight)}>
            <div className={styles.links}>
                    <Link to="/" className={styles.link}>
                        <FaHome/>
                        <p>Hem</p>
                    </Link>
                <div className={styles.link}>
                    <Link to="/album">
                        <FaImages/>
                        <p>Album</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SideMenu;
