import React, { createElement } from "react";

import styles from "./Social.module.scss";

const Social = ({ socials }) => {
  return (
    <div className={styles.social}>
      {socials.map(({ id, path, component }, _) => {
        return (
          <a key={id} className={styles.link} href={path}>
            {createElement(component, { className: styles.icon }, null)}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
