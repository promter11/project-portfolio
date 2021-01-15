import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";

import styles from "./NoMatch.module.scss";

const NoMatch = () => {
  return (
    <section className={styles.noMatch}>
      <Container>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you were looking for could not be found. It might have been
          removed, renamed, or did not exist in the first place.
        </p>
        <Link className={styles.link} to="/">
          Homepage
        </Link>
      </Container>
    </section>
  );
};

export default NoMatch;
