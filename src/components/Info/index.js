import React from "react";
import { string, arrayOf, shape } from "prop-types";

import styles from "./Info.module.scss";

const Info = ({ items }) => {
  return (
    <div className={styles.info}>
      {items.map(({ image, value, path }, index) => {
        return (
          <div key={index} className={styles.block}>
            <img className={styles.image} src={image} alt="Info" />
            {path ? (
              <a className={styles.text} href={path}>
                {value}
              </a>
            ) : (
              <span className={styles.text}>{value}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

Info.propTypes = {
  items: arrayOf(
    shape({
      image: string,
      path: string,
      value: string,
    })
  ).isRequired,
};

export default Info;
