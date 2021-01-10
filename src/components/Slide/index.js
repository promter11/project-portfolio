import React, { createElement } from "react";

import { useModal } from "../../hooks/useModal";

import { ReactComponent as Info } from "../../assets/icons/portfolio/info.svg";
import { ReactComponent as Enter } from "../../assets/icons/portfolio/enter.svg";
import styles from "./Slide.module.scss";

const Slide = ({ id, title, date, description, image, path }) => {
  const { showModal, RenderModal } = useModal();

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
          <a className={styles.link} href={path}>
            {createElement(Enter, { className: styles.icon }, null)}
          </a>
        </div>
      </div>
      <RenderModal>Modal #{id} e</RenderModal>
    </div>
  );
};

export default Slide;
