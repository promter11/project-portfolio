import React from "react";

import styles from "./Language.module.scss";

const Language = ({ languages }) => {
  return (
    <div className={styles.language}>
      {languages.map(({ id, icon }, _) => {
        return (
          <button key={id} className={styles.button} type="button">
            <img className={styles.icon} src={icon} alt="Флаг" />
          </button>
        );
      })}
    </div>
  );
};

export default Language;
