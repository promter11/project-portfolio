import React from "react";

import styles from "./Menu.module.scss";

const Menu = ({ items }) => {
  return (
    <nav className={styles.nav}>
      {items.map(({ id, title, path, icon }, _) => {
        return (
          <a key={id} className={styles.link} href={path}>
            <img className={styles.icon} src={icon} alt="Иконка" />
            <span className={styles.text}>{title}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default Menu;
