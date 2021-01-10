import React, { memo } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

const Modal = memo(({ children, closeModal }) => {
  const modalRoot = document.getElementById("modal-root");

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button type="button" onClick={closeModal}>
          Close
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
});

export default Modal;
