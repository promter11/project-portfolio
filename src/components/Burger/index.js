import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Burger.module.scss";

const Burger = ({ active, onSetActive }) => {
  return (
    <ul className={styles.burger} onClick={() => onSetActive(!active)}>
      {Array.from({ length: 3 }).map((item, index) => {
        return (
          <CSSTransition
            key={index}
            in={active}
            timeout={300}
            classNames={{
              enter: styles.itemEnter,
              enterActive: styles.itemEnterActive,
              enterDone: styles.itemEnterDone,
              exit: styles.itemExitActive,
              exitActive: styles.itemExitActive,
              exitDone: styles.itemExitDone,
            }}
          >
            <li className={styles.item} />
          </CSSTransition>
        );
      })}
    </ul>
  );
};

export default Burger;
