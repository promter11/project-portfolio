import React from "react";

import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
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
  );
};

export default Preloader;
