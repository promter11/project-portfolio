import React from "react";
import { bool } from "prop-types";
import { CSSTransition } from "react-transition-group";

import styles from "./Preloader.module.scss";

const Preloader = ({ loading }) => {
  return (
    <CSSTransition
      in={loading}
      timeout={1000}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      unmountOnExit
    >
      <div className={styles.preloader}>
        <div className={styles.block}>
          {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => {
            return (
              <span key={index} className={styles.letter}>
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </CSSTransition>
  );
};

Preloader.propTypes = {
  loading: bool.isRequired,
};

export default Preloader;
