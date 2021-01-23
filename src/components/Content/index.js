import React from "react";

import Routes from "../../routes";

import styles from "./Content.module.scss";

const Content = ({ language }) => {
  return (
    <main className={styles.main}>
      <Routes language={language} />
    </main>
  );
};

export default Content;
