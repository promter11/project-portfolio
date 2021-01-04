import React from "react";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Hello, I'm Alex.</h1>
      <p className={styles.desc}>
        Front-end developer who loves to work with React.
      </p>
      <a className={styles.link} href="/about">
        Learn more
      </a>
    </section>
  );
};

export default Home;
