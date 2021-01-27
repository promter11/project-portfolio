import React, { createElement } from "react";
import { string, arrayOf, shape } from "prop-types";

import Heading from "../Heading";
import Modal from "../Modal";

import { ReactComponent as Info } from "../../assets/icons/portfolio/info.svg";
import styles from "./Slide.module.scss";
import modalStyles from "../Modal/Modal.module.scss";

const Slide = ({
  title,
  date,
  description,
  fullDescription,
  technologies,
  image,
  link: { text, path },
}) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={styles.slide}>
      <div className={styles.header}>
        <span className={styles.date}>{date}</span>
        <img className={styles.image} src={image} alt="Preview" />
      </div>
      <div className={styles.content}>
        <Heading className={styles.title} level={2}>
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>
        <div className={styles.wrapper}>
          <button
            className={styles.button}
            onClick={() => setVisible((value) => !value)}
          >
            {createElement(Info, { className: styles.icon }, null)}
          </button>
        </div>
      </div>
      <Modal visible={visible} closeModal={() => setVisible((value) => !value)}>
        <div className={modalStyles.modalWrapper}>
          <div className={modalStyles.modalBlock}>
            <img className={modalStyles.modalImage} src={image} alt="Project" />
          </div>
          <div className={modalStyles.modalBlock}>
            <Heading className={modalStyles.modalTitle} level={3}>
              {title}
            </Heading>
            <p className={modalStyles.modalDesc}>{fullDescription}</p>
            <ul className={modalStyles.modalList}>
              {technologies.map((technology, index) => {
                return (
                  <li key={index} className={modalStyles.modalListItem}>
                    {technology}
                  </li>
                );
              })}
            </ul>
            <a className={modalStyles.modalLink} href={path}>
              {text}
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

Slide.propTypes = {
  title: string,
  date: string,
  description: string,
  fullDescription: string,
  technologies: arrayOf(string),
  image: string,
  link: shape({
    text: string,
    path: string,
  }),
};

export default Slide;
