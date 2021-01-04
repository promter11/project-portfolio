import React from "react";

import Sidebar from "../Sidebar";
import Content from "../Content";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
