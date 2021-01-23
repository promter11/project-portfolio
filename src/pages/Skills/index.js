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
                <h2 className={styles.contentTitle}>{title}</h2>
                <div className={styles.wrapper}>
                  {items.map(({ title, text, image }, index) => {
                    return (
                      <div key={index} className={styles.block}>
                        <img className={styles.image} src={image} alt={title} />
                        <h3 className={styles.blockTitle}>{title}</h3>
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
