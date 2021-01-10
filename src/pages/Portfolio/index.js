import React from "react";

import Carousel from "../../components/Carousel";

import Olivia from "../../assets/images/Portfolio Item 1.jpg";
import Passion from "../../assets/images/Portfolio Item 2.jpg";
import AppLab from "../../assets/images/Portfolio Item 3.jpg";
import styles from "./Portfolio.module.scss";

const slides = [
  {
    id: 0,
    title: "Olivia",
    date: "24 December, 2020",
    description: "Online store for ordering perfumes",
    image: Olivia,
    path: "/",
  },
  {
    id: 1,
    title: "Passion",
    date: "12 August, 2020",
    description: "SPA-application for downloading desktop wallpaper",
    image: Passion,
    path: "/",
  },
  {
    id: 2,
    title: "AppLab",
    date: "06 May, 2020",
    description: "Advertising Landing Page about AppLab mobile application",
    image: AppLab,
    path: "/",
  },
  {
    id: 3,
    title: "COVID-19",
    date: "14 April, 2020",
    description: "COVID-19 Responsive Landing Page",
    image: AppLab,
    path: "/",
  },
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
