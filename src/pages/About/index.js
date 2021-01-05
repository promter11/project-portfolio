import React from "react";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.block}>
        <span className={styles.subtitle}>Some words to say...</span>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className={styles.text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <a className={styles.link} href="/files/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
