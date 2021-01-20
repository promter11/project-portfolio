import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.scss";

const Menu = ({ items }) => {
  return (
    <nav className={styles.nav}>
      {items.map(({ title, path, icon }, index) => {
        return (
          <NavLink
            key={index}
            className={styles.link}
            activeClassName={styles.active}
            to={path}
            exact
          >
            <img className={styles.icon} src={icon} alt={title} />
            <span className={styles.text}>{title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Menu;
