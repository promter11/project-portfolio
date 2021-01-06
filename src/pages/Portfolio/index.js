import React from "react";

import Carousel from "../../components/Carousel";

import styles from "./Portfolio.module.scss";

const slides = [
  { id: 0, title: "Olivia" },
  { id: 1, title: "Passion" },
  { id: 2, title: "AppLab" },
  { id: 3, title: "COVID-19" },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h1 className={styles.title}>Portfolio</h1>
      <Carousel slides={slides} />
    </section>
  );
};

export default Portfolio;
