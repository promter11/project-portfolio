import React, { Fragment, useState } from "react";

import Modal from "../../components/Modal";

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const RenderModal = ({ children }) => {
    return (
      <Fragment>
        {visible && <Modal closeModal={closeModal}>{children}</Modal>}
      </Fragment>
    );
  };

  return {
    visible,
    setVisible,
    showModal,
    closeModal,
    RenderModal,
  };
};
