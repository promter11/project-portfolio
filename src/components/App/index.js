import React from "react";

import Sidebar from "../../containers/Sidebar";
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
