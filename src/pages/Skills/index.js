import React from "react";

import Container from "../../components/Container";

import HTML from "../../assets/icons/skills/html.svg";
import Pug from "../../assets/icons/skills/pug.svg";
import CSS from "../../assets/icons/skills/css.svg";
import Sass from "../../assets/icons/skills/sass.svg";
import Bootstrap from "../../assets/icons/skills/bootstrap.svg";
import BEM from "../../assets/icons/skills/bem.svg";
import JavaScript from "../../assets/icons/skills/javascript.svg";
import TypeScript from "../../assets/icons/skills/typescript.svg";
import PHP from "../../assets/icons/skills/php.svg";
import jQuery from "../../assets/icons/skills/jquery.svg";
import ReactIcon from "../../assets/icons/skills/react.svg";
import Redux from "../../assets/icons/skills/redux.svg";
import MobX from "../../assets/icons/skills/mobx.svg";
import Material from "../../assets/icons/skills/material.svg";
import Gulp from "../../assets/icons/skills/gulp.svg";
import NPM from "../../assets/icons/skills/npm.svg";
import Webpack from "../../assets/icons/skills/webpack.svg";
import Git from "../../assets/icons/skills/git.svg";
import MySQL from "../../assets/icons/skills/mysql.svg";
import styles from "./Skills.module.scss";

const initialState = [
  {
    id: 0,
    title: "Document Structure",
    items: [
      {
        id: 0,
        title: "HTML",
        text:
          "A markup language for creating the structure of web pages and emails",
        image: HTML,
      },
      {
        id: 1,
        title: "Pug",
        text: "A HTML preprocessor and templating engine",
        image: Pug,
      },
    ],
  },
  {
    id: 1,
    title: "Document Appearance",
    items: [
      {
        id: 0,
        title: "CSS",
        text: "A formal language used to describe the appearance of a document",
        image: CSS,
      },
      {
        id: 1,
        title: "Sass",
        text:
          "A CSS-based metalanguage designed to increase the level of abstraction of CSS code and simplify CSS files",
        image: Sass,
      },
      {
        id: 2,
        title: "Bootstrap",
        text:
          "A HTML / CSS / JS framework for quickly building modern responsive websites",
        image: Bootstrap,
      },
      {
        id: 3,
        title: "BEM",
        text:
          "Web development methodology, as well as a set of front-end libraries, frameworks and auxiliary tools",
        image: BEM,
      },
    ],
  },
  {
    id: 2,
    title: "Programming Languages",
    items: [
      {
        id: 0,
        title: "JavaScript",
        text:
          "A dynamic programming language that is applied to an HTML document and can provide dynamic interactivity on websites",
        image: JavaScript,
      },
      {
        id: 1,
        title: "TypeScript",
        text:
          "A strongly typed programming language that adds syntactic benefits to the Javascript language",
        image: TypeScript,
      },
      {
        id: 2,
        title: "PHP",
        text:
          "A scripting, interpreted programming language specially designed for writing web applications (scripts) that run on a web server",
        image: PHP,
      },
    ],
  },
  {
    id: 3,
    title: "Libraries",
    items: [
      {
        id: 0,
        title: "jQuery",
        text: "A fast, small, and feature-rich JavaScript library",
        image: jQuery,
      },
      {
        id: 1,
        title: "React",
        text: "A JavaScript library for building user interfaces",
        image: ReactIcon,
      },
      {
        id: 2,
        title: "Redux",
        text: "A library for managing application state",
        image: Redux,
      },
      {
        id: 3,
        title: "MobX",
        text: "Simple, scalable state management",
        image: MobX,
      },
      {
        id: 4,
        title: "Material UI",
        text: "React components for faster and easier web development",
        image: Material,
      },
    ],
  },
  {
    id: 4,
    title: "Tools",
    items: [
      {
        id: 0,
        title: "NPM",
        text: "The package manager included with Node.js",
        image: NPM,
      },
      {
        id: 1,
        title: "Gulp",
        text: "A toolkit to automate and enhance workflow",
        image: Gulp,
      },
      {
        id: 2,
        title: "Webpack",
        text: "A module bundler",
        image: Webpack,
      },
    ],
  },
  {
    id: 5,
    title: "Other",
    items: [
      {
        id: 0,
        title: "Git",
        text: "A free and open source distributed version control system",
        image: Git,
      },
      {
        id: 1,
        title: "MySQL",
        text: "A free relational database management system",
        image: MySQL,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Container>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.content}>
          {initialState.map(({ id, title, items }, _) => {
            return (
              <div className={styles.contentBlock} key={id}>
                <h2 className={styles.contentTitle}>{title}</h2>
                <div className={styles.wrapper}>
                  {items.map(({ id, title, text, image }, _) => {
                    return (
                      <div key={id} className={styles.block}>
                        <img
                          className={styles.image}
                          src={image}
                          alt="Technology"
                        />
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
        <p className={styles.desc}>
          * And other popular technologies like React Router, Styled Components,
          Redux Form, React Transition Group and others.
        </p>
      </Container>
    </section>
  );
};

export default Skills;
