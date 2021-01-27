import React from "react";

import Heading from "../../components/Heading";
import Container from "../../components/Container";

import { skillsText } from "../../common/jsonText/skillsText";

import styles from "./Skills.module.scss";

const Skills = ({ language }) => {
  return (
    <section className={styles.skills}>
      <Container>
        <Heading className={styles.title} level={1}>
          {skillsText[language].title}
        </Heading>
        <div className={styles.content}>
          {skillsText[language].content.map(({ title, items }, index) => {
            return (
              <div className={styles.contentBlock} key={index}>
                <Heading className={styles.contentTitle} level={2}>
                  {title}
                </Heading>
                <div className={styles.wrapper}>
                  {items.map(({ title, text, image }, index) => {
                    return (
                      <div key={index} className={styles.block}>
                        <img className={styles.image} src={image} alt={title} />
                        <Heading className={styles.blockTitle} level={3}>
                          {title}
                        </Heading>
                        <p className={styles.text}>{text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <p className={styles.desc}>{skillsText[language].desc}</p>
      </Container>
    </section>
  );
};

export default Skills;
