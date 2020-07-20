import styles from './SideMenu.module.scss';
import React from "react";
import classNames from 'classnames';

const SideMenu = ({align}) => {
    return (
        <div className={classNames(styles.sideMenu, align ==='left' ? styles.alignLeft : styles.alignRight)}>

        </div>
    )
};

export default SideMenu;
