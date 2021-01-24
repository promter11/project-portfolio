import React, { useState, useEffect } from "react";

import Preloader from "../Preloader";
import Sidebar from "../../containers/Sidebar";
import Content from "../../containers/Content";

import styles from "./App.module.scss";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(
      () => setLoading((value) => !value),
      (Math.random() * (3 - 1) + 1) * 1000
    );
  }, []);

  return (
    <div className={styles.app}>
      <Preloader loading={loading} />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
