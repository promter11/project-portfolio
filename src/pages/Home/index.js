import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <Heading className={styles.title} level={1}>
          Hello, I'm Alex.
        </Heading>
        <p className={styles.desc}>
          Front-end developer who loves to work with React.
        </p>
        <Link className={styles.link} to="/about">
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Home;
