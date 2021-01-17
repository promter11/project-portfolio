import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Heading from "../../components/Heading";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <Container>
        <Heading className={styles.title} level={1}>
          Hello,
          <br />
          I'm Alex.
        </Heading>
        <p className={styles.desc}>
          Front-end developer who loves to work with React.
        </p>
        <Link className={styles.link} to="/about">
          Learn more
        </Link>
      </Container>
    </section>
  );
};

export default Home;
