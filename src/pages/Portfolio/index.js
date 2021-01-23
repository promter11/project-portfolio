import React from "react";

import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Carousel from "../../components/Carousel";

import { portfolioText } from "../../common/jsonText/portfolioText";

import styles from "./Portfolio.module.scss";

const Portfolio = ({ language }) => {
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
