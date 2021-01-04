import React from "react";

import styles from "./Content.module.scss";
import HomePage from "../../pages/HomePage";

const Content = () => {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
};

export default Content;
