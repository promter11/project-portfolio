import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading";
import Container from "../../components/Container";

import { noMatchText } from "../../common/jsonText/noMatchText";
import { loadState } from "../../common/localStorage";

import styles from "./NoMatch.module.scss";

const NoMatch = () => {
  const {
    LanguageReducer: {
      defaultLanguage: { language },
    },
  } = loadState();

  return (
    <section className={styles.noMatch}>
      <Container>
        <Heading className={styles.title} level={1}>
          {noMatchText[language].title}
        </Heading>
        <p className={styles.text}>{noMatchText[language].desc}</p>
        <Link className={styles.link} to={noMatchText[language].link.path}>
          {noMatchText[language].link.text}
        </Link>
      </Container>
    </section>
  );
};

export default NoMatch;
