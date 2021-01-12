import React, { memo } from "react";
import { createPortal } from "react-dom";

import Close from "../../assets/icons/portfolio/close.svg";
import styles from "./Modal.module.scss";

const Modal = memo(({ children, closeModal }) => {
  const modalRoot = document.getElementById("modal-root");

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.content}>
        <button className={styles.button} type="button" onClick={closeModal}>
          <img className={styles.icon} src={Close} alt="Close" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
});

export default Modal;
