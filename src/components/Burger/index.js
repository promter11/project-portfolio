import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Burger.module.scss";

const Burger = ({ status, onToggleStatus }) => {
  return (
    <ul className={styles.burger} onClick={() => onToggleStatus()}>
      {Array.from({ length: 3 }).map((item, index) => {
        return (
          <CSSTransition
            key={index}
            in={status}
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
