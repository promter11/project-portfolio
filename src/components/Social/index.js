import React from "react";

import styles from "./Social.module.scss";

const Social = ({ socials }) => {
  return (
    <div className={styles.social}>
      {socials.map(({ id, path, icon }, _) => {
        return (
          <a key={id} className={styles.link} href={path}>
            <img className={styles.icon} src={icon} alt="Иконка" />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
