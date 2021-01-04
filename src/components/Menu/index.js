import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.scss";

const Menu = ({ items }) => {
  return (
    <nav className={styles.nav}>
      {items.map(({ id, title, path, icon }, _) => {
        return (
          <NavLink
            key={id}
            className={styles.link}
            activeClassName={styles.active}
            to={path}
            exact
          >
            <img className={styles.icon} src={icon} alt="Icon" />
            <span className={styles.text}>{title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Menu;
