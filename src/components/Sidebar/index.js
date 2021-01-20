import React from "react";
import { CSSTransition } from "react-transition-group";

import User from "../User";
import Menu from "../Menu";
import Social from "../Social";
import Burger from "../Burger";
import Language from "../../containers/Language";

import { sidebarText } from "../../common/jsonText/sidebarText";
import { loadState } from "../../common/localStorage";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ state, actions }) => {
  const {
    LanguageReducer: {
      defaultLanguage: { language },
    },
  } = loadState();

  const { status } = state;
  const { toggleStatus } = actions;

  return (
    <CSSTransition
      in={status}
      timeout={0}
      classNames={{
        enter: styles.sidebarEnter,
        enterActive: styles.sidebarEnterActive,
        enterDone: styles.sidebarEnterDone,
        exit: styles.sidebarExit,
        exitActive: styles.sidebarExitActive,
        exitDone: styles.sidebarExitDone,
      }}
    >
      <aside className={styles.sidebar}>
        <Burger status={status} onToggleStatus={toggleStatus} />
        <User {...sidebarText[language].user} />
        <Menu items={sidebarText[language].menu} />
        <div className={styles.wrapper}>
          <Language />
          <Social socials={sidebarText[language].social} />
        </div>
      </aside>
    </CSSTransition>
  );
};

export default Sidebar;
