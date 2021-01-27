import React, { createElement } from "react";
import { string, any, arrayOf, shape } from "prop-types";

import styles from "./Social.module.scss";

const Social = ({ socials }) => {
  return (
    <div className={styles.social}>
      {socials.map(({ path, component }, index) => {
        return (
          <a key={index} className={styles.link} href={path}>
            {createElement(component, { className: styles.icon }, null)}
          </a>
        );
      })}
    </div>
  );
};

Social.propTypes = {
  socials: arrayOf(
    shape({
      path: string,
      component: any,
    })
  ),
};

export default Social;
