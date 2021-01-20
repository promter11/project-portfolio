import React, { createElement } from "react";
import { CSSTransition } from "react-transition-group";

import { useModal } from "../../hooks/useModal";

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
  const { visible, showModal, RenderModal } = useModal();

  return (
    <div className={styles.slide}>
      <div className={styles.header}>
        <span className={styles.date}>{date}</span>
        <img className={styles.image} src={image} alt="Preview" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={showModal}>
            {createElement(Info, { className: styles.icon }, null)}
          </button>
        </div>
      </div>
      <CSSTransition
        in={visible}
        timeout={300}
        classNames={{
          enter: modalStyles.modalEnter,
          enterActive: modalStyles.modalEnterActive,
          enterDone: modalStyles.modalEnterDone,
          exit: modalStyles.modalExit,
          exitActive: modalStyles.modalExitActive,
          exitDone: modalStyles.modalExitDone,
        }}
      >
        <RenderModal>
          <div className={modalStyles.modalWrapper}>
            <div className={modalStyles.modalBlock}>
              <img
                className={modalStyles.modalImage}
                src={image}
                alt="Project"
              />
            </div>
            <div className={modalStyles.modalBlock}>
              <h3 className={modalStyles.modalTitle}>{title}</h3>
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
        </RenderModal>
      </CSSTransition>
    </div>
  );
};

export default Slide;
