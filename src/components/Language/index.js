import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Arrow from "../../assets/icons/aside/arrow-down.svg";
import styles from "./Language.module.scss";

const Language = ({ languages }) => {
  const [isHiddenVisible, setIsHiddenVisible] = useState(false);

  const activeLanguage = languages.find((language, _) => language.active);

  return (
    <div className={styles.language}>
      <div className={styles.block}>
        <button
          className={styles.button}
          onClick={() => setIsHiddenVisible(!isHiddenVisible)}
        >
          <div className={styles.wrapper}>
            <img className={styles.icon} src={activeLanguage.icon} alt="Flag" />
          </div>
          <div className={styles.wrapper}>
            <CSSTransition
              in={isHiddenVisible}
              timeout={300}
              classNames={{
                enter: styles.arrowEnter,
                enterActive: styles.arrowEnterActive,
                enterDone: styles.arrowEnterDone,
                exit: styles.arrowExit,
                exitActive: styles.arrowExitActive,
                exitDone: styles.arrowExitDone,
              }}
            >
              <img className={styles.arrow} src={Arrow} alt="Arrow" />
            </CSSTransition>
          </div>
        </button>
      </div>
      <CSSTransition
        in={isHiddenVisible}
        timeout={300}
        classNames={{
          enter: styles.languageEnter,
          enterActive: styles.languageEnterActive,
          exit: styles.languageExit,
        }}
        unmountOnExit
      >
        <div className={styles.hidden}>
          {languages.map(({ id, icon }, _) => {
            return (
              <button key={id} className={styles.button} type="button">
                <img className={styles.icon} src={icon} alt="Flag" />
              </button>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Language;
