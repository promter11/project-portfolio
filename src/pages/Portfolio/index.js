import React from "react";

import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Carousel from "../../components/Carousel";

import { portfolioText } from "../../common/jsonText/portfolioText";
import { loadState } from "../../common/localStorage";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const {
    LanguageReducer: {
      defaultLanguage: { language },
    },
  } = loadState();

  return (
    <section className={styles.portfolio}>
      <Container>
        <Heading className={styles.title} level={1}>
          {portfolioText[language].title}
        </Heading>
        <Carousel slides={portfolioText[language].content} />
      </Container>
    </section>
  );
};

export default Portfolio;
