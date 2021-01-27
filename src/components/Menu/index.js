import React from "react";
import { string, func, arrayOf, shape } from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.scss";

const Menu = ({ items, onToggleStatus }) => {
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
            onClick={() => onToggleStatus()}
          >
            <img className={styles.icon} src={icon} alt={title} />
            <span className={styles.text}>{title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

Menu.propTypes = {
  items: arrayOf(
    shape({
      title: string,
      path: string,
      icon: string,
    })
  ),
  onToggleStatus: func,
};

export default Menu;
