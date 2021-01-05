import React from "react";

import HTML from "../../assets/icons/skills/html-5.svg";
import CSS from "../../assets/icons/skills/css-3.svg";
import JavaScript from "../../assets/icons/skills/javascript.svg";
import styles from "./Skills.module.scss";

const initialState = [
  {
    id: 0,
    title: "HTML",
    text: "Lorem ipsum dolor sit amet, ipsum dolor sit amet",
    image: HTML,
  },
  { id: 1, title: "CSS", text: "Lorem ipsum dolor sit amet", image: CSS },
  {
    id: 2,
    title: "JavaScript",
    text: "Lorem ipsum dolor sit amet",
    image: JavaScript,
  },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>Basics</h2>
        <div className={styles.wrapper}>
          {initialState.map(({ id, title, text, image }, _) => {
            return (
              <div key={id} className={styles.block}>
                <img className={styles.image} src={image} alt="Technology" />
                <h3 className={styles.blockTitle}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <p className={styles.desc}>
        * And other popular technologies like React Router, Styled Components,
        Redux Form and others.
      </p>
    </section>
  );
};

export default Skills;
