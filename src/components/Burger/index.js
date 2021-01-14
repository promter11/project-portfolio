import React from "react";

import styles from "./Burger.module.scss";

const Burger = () => {
  return (
    <ul className={styles.burger}>
      <li className={styles.item} />
      <li className={styles.item} />
      <li className={styles.item} />
    </ul>
  );
};

export default Burger;
