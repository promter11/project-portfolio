import React from "react";

import Heading from "../../components/Heading";
import Container from "../../components/Container";

import { aboutText } from "../../common/jsonText/aboutText";

import styles from "./About.module.scss";

const About = ({ language }) => {
  return (
    <section className={styles.about}>
      <Container>
        <Heading className={styles.title} level={1}>
          {aboutText[language].title}
        </Heading>
        <div className={styles.block}>
          <h3 className={styles.subtitle}>{aboutText[language].subtitle}</h3>
          {aboutText[language].text.map((item, index) => {
            return (
              <p key={index} className={styles.text}>
                {item}
              </p>
            );
          })}
          <a
            className={styles.link}
            href={aboutText[language].link.path}
            download
          >
            {aboutText[language].link.text}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
