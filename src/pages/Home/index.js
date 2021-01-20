import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Heading from "../../components/Heading";

import { homeText } from "../../common/jsonText/homeText";
import { loadState } from "../../common/localStorage";

import styles from "./Home.module.scss";

const Home = () => {
  const {
    LanguageReducer: {
      defaultLanguage: { language },
    },
  } = loadState();

  return (
    <section className={styles.home}>
      <Container>
        <Heading className={styles.title} level={1}>
          {homeText[language].title}
        </Heading>
        <p className={styles.desc}>{homeText[language].desc}</p>
        <Link className={styles.link} to={homeText[language].link.path}>
          {homeText[language].link.text}
        </Link>
      </Container>
    </section>
  );
};

export default Home;
