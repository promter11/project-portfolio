import React from "react";
import { string, bool, func, arrayOf, shape } from "prop-types";
import { CSSTransition } from "react-transition-group";

import Arrow from "../../assets/icons/aside/arrow-down.svg";
import styles from "./Language.module.scss";

const Language = ({ state, actions }) => {
  const { toggle, defaultLanguage, languagesList } = state;
  const { setToggle, setLanguage } = actions;

  return (
    <div className={styles.language}>
      <div className={styles.block}>
        <button className={styles.button} onClick={() => setToggle()}>
          <div className={styles.wrapper}>
            <img
              className={styles.icon}
              src={defaultLanguage.icon}
              alt={defaultLanguage.language}
            />
          </div>
          <div className={styles.wrapper}>
            <CSSTransition
              in={toggle}
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
        in={toggle}
        timeout={300}
        classNames={{
          enter: styles.languageEnter,
          enterActive: styles.languageEnterActive,
          exit: styles.languageExit,
        }}
        unmountOnExit
      >
        <div className={styles.hidden}>
          {languagesList.map(({ language, icon }, index) => {
            return (
              <button
                key={index}
                className={styles.button}
                type="button"
                onClick={() => setLanguage(index)}
              >
                <img className={styles.icon} src={icon} alt={language} />
              </button>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

Language.propTypes = {
  state: shape({
    toggle: bool,
    defaultLanguage: shape({
      language: string,
      icon: string,
    }),
    languagesList: arrayOf(
      shape({
        language: string,
        icon: string,
      })
    ),
  }).isRequired,
  actions: shape({
    setToggle: func,
    setLanguage: func,
  }).isRequired,
};

export default Language;
