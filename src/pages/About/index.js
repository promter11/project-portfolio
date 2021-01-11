import React from "react";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.block}>
        <span className={styles.subtitle}>Some words to say...</span>
        <p className={styles.text}>
          I'm a front-end developer building user interfaces using React.
        </p>
        <p className={styles.text}>
          I'm well organized, motivated, team oriented and constantly working to
          improve my professional skills. I pay attention to detail, but without
          excessive perfectionism when it hurts development speed.
        </p>
        <p className={styles.text}>
          Interested in working on ambitious projects on an up-to-date
          technology stack with colleagues with extensive experience in
          front-end development who enjoy sharing their knowledge.
        </p>
        <a className={styles.link} href="/files/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
