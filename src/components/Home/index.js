import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Hello, I'm Alex.</h1>
      <p className={styles.desc}>
        Front-end developer who loves to work with React.
      </p>
      <Link className={styles.link} to="/about">
        Learn more
      </Link>
    </section>
  );
};

export default Home;
