import React from "react";
import { string, bool, func, shape } from "prop-types";
import { CSSTransition } from "react-transition-group";

import User from "../User";
import Menu from "../Menu";
import Social from "../Social";
import Burger from "../Burger";
import Language from "../../containers/Language";

import { sidebarText } from "../../common/jsonText/sidebarText";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ state, actions }) => {
  const { sidebarStatus, language } = state;
  const { toggleStatus } = actions;

  return (
    <CSSTransition
      in={sidebarStatus}
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
        <Burger status={sidebarStatus} onToggleStatus={toggleStatus} />
        <User {...sidebarText[language].user} />
        <Menu
          items={sidebarText[language].menu}
          onToggleStatus={toggleStatus}
        />
        <div className={styles.wrapper}>
          <Language />
          <Social socials={sidebarText[language].social} />
        </div>
      </aside>
    </CSSTransition>
  );
};

Sidebar.propTypes = {
  state: shape({
    sidebarStatus: bool,
    language: string,
  }),
  actions: shape({
    toggleStatus: func,
  }),
};

export default Sidebar;
