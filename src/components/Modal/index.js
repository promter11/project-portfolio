import React from "react";
import { bool, func, node } from "prop-types";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Close from "../../assets/icons/portfolio/close.svg";
import styles from "./Modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, modalStatus, toggleModal }) => {
  return createPortal(
    <CSSTransition
      in={modalStatus}
      timeout={500}
      classNames={{
        enter: styles.modalEnter,
        enterActive: styles.modalEnterActive,
        exitActive: styles.modalExitActive,
      }}
      unmountOnExit
    >
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={toggleModal} />
        <div className={styles.content}>
          <button className={styles.button} type="button" onClick={toggleModal}>
            <img className={styles.icon} src={Close} alt="Close" />
          </button>
          {children}
        </div>
      </div>
    </CSSTransition>,
    modalRoot
  );
};

Modal.propTypes = {
  children: node,
  modalStatus: bool,
  toggleModal: func,
};

export default Modal;
