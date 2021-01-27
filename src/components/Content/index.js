import React from "react";
import { string } from "prop-types";

import Routes from "../../routes";

import styles from "./Content.module.scss";

const Content = ({ language }) => {
  return (
    <main className={styles.main}>
      <Routes language={language} />
    </main>
  );
};

Content.propTypes = {
  language: string,
};

export default Content;
