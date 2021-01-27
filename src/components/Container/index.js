import React from "react";
import { node } from "prop-types";

import styles from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: node,
};

export default Container;
