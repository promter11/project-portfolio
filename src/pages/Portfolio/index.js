import React from "react";

import Container from "../../components/Container";
import Carousel from "../../components/Carousel";

import Olivia from "../../assets/images/Portfolio Item 1.jpg";
import Passion from "../../assets/images/Portfolio Item 2.jpg";
import AppLab from "../../assets/images/Portfolio Item 3.jpg";
import Covid from "../../assets/images/Portfolio Item 4.jpg";
import styles from "./Portfolio.module.scss";

const slides = [
  {
    id: 0,
    title: "Olivia",
    date: "24 December, 2020",
    description: "Application for ordering perfumes",
    fullDescription:
      "Application for ordering perfumes using React + MobX with filters, search, shopping cart with checkout.",
    technologies: [
      "HTML (JSX)",
      "Styled Components",
      "React JS (Class Components)",
      "MobX",
      "React Router",
      "Webpack",
    ],
    image: Olivia,
    path: "/",
  },
  {
    id: 1,
    title: "Passion",
    date: "12 August, 2020",
    description: "SPA-application for downloading wallpapers for desktop",
    fullDescription:
      "SPA-application for downloading wallpapers for desktop using React library on functional components and hooks, with reference to Pixabay API.",
    technologies: [
      "HTML (JSX)",
      "CSS Modules",
      "Typescript",
      "React (Hooks)",
      "Redux + Thunk",
      "React Router",
      "Webpack",
    ],
    image: Passion,
    path: "/",
  },
  {
    id: 2,
    title: "AppLab",
    date: "06 May, 2020",
    description: "Advertising Landing Page about AppLab mobile application",
    fullDescription:
      "Advertising Landing Page about AppLab mobile application with simple animations, bootstrap grid / components and a little jQuery functionality.",
    technologies: [
      "HTML5",
      "SCSS",
      "jQuery",
      "Bootstrap 4",
      "Swiper Slider",
      "AOS JS (Animations)",
      "Gulp",
    ],
    image: AppLab,
    path: "/",
  },
  {
    id: 3,
    title: "COVID-19",
    date: "14 April, 2020",
    description: "COVID-19 Responsive Landing Page",
    fullDescription:
      "Adaptive Landing Page on the COVID-19 theme with little functionality in the form of smooth transitions, a slider, a modal window, etc., as well as up-to-date data on the number of infected by country, obtained by contacting ninja-api via fetch.",
    technologies: ["PUG", "SCSS", "Vanilla JS", "Gulp"],
    image: Covid,
    path: "/",
  },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Container>
        <h1 className={styles.title}>Works</h1>
        <Carousel slides={slides} />
      </Container>
    </section>
  );
};

export default Portfolio;
