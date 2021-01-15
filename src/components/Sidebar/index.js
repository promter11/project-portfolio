import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import User from "../User";
import Burger from "../Burger";
import Menu from "../Menu";
import Social from "../Social";
import Language from "../Language";

import Avatar from "../../assets/images/Avatar.jpg";
import Home from "../../assets/icons/aside/home.svg";
import About from "../../assets/icons/aside/about.svg";
import Skills from "../../assets/icons/aside/skills.svg";
import Portfolio from "../../assets/icons/aside/portfolio.svg";
import Contact from "../../assets/icons/aside/contact.svg";
import { ReactComponent as Telegram } from "../../assets/icons/aside/telegram.svg";
import { ReactComponent as Github } from "../../assets/icons/aside/github.svg";
import { ReactComponent as Email } from "../../assets/icons/aside/email.svg";
import Russia from "../../assets/icons/aside/russia.svg";
import UK from "../../assets/icons/aside/uk.svg";
import styles from "./Sidebar.module.scss";

const initialUserState = {
  name: "Alexander Samylin",
  position: "Front-End Developer",
  avatar: Avatar,
};
const initialMenuState = [
  { id: 0, title: "Home", path: "/", icon: Home },
  { id: 1, title: "About", path: "/about", icon: About },
  { id: 2, title: "Skills", path: "/skills", icon: Skills },
  { id: 3, title: "Portfolio", path: "/portfolio", icon: Portfolio },
  { id: 4, title: "Contact", path: "/contact", icon: Contact },
];
const initialSocialState = [
  {
    id: 0,
    path: "https://t.me/darklurkerrr",
    component: Telegram,
  },
  {
    id: 1,
    path: "https://github.com/promter11",
    component: Github,
  },
  {
    id: 2,
    path: "mailto:promter11@gmail.com",
    component: Email,
  },
];
const initialLanguageState = [
  { id: 0, icon: Russia, active: false },
  { id: 1, icon: UK, active: true },
];

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <CSSTransition
      in={active}
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
        <Burger active={active} onSetActive={setActive} />
        <User {...initialUserState} />
        <Menu items={initialMenuState} />
        <div className={styles.wrapper}>
          <Language languages={initialLanguageState} />
          <Social socials={initialSocialState} />
        </div>
      </aside>
    </CSSTransition>
  );
};

export default Sidebar;
