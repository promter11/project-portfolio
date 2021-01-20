import Avatar from "../../../assets/images/Avatar.jpg";
import Home from "../../../assets/icons/aside/home.svg";
import About from "../../../assets/icons/aside/about.svg";
import Skills from "../../../assets/icons/aside/skills.svg";
import Portfolio from "../../../assets/icons/aside/portfolio.svg";
import Contact from "../../../assets/icons/aside/contact.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/aside/telegram.svg";
import { ReactComponent as Github } from "../../../assets/icons/aside/github.svg";
import { ReactComponent as Email } from "../../../assets/icons/aside/email.svg";

export const sidebarText = {
  RU: {
    user: {
      name: "Александр Самылин",
      position: "Фронтенд-разработчик",
      avatar: Avatar,
    },
    menu: [
      { title: "Домой", path: "/", icon: Home },
      { title: "Обо мне", path: "/about", icon: About },
      { title: "Навыки", path: "/skills", icon: Skills },
      { title: "Портфолио", path: "/portfolio", icon: Portfolio },
      { title: "Контакты", path: "/contact", icon: Contact },
    ],
    social: [
      {
        path: "https://t.me/darklurkerrr",
        component: Telegram,
      },
      {
        path: "https://github.com/promter11",
        component: Github,
      },
      {
        path: "mailto:promter11@gmail.com",
        component: Email,
      },
    ],
  },
  EN: {
    user: {
      name: "Alexander Samylin",
      position: "Front-End Developer",
      avatar: Avatar,
    },
    menu: [
      { title: "Home", path: "/", icon: Home },
      { title: "About", path: "/about", icon: About },
      { title: "Skills", path: "/skills", icon: Skills },
      { title: "Portfolio", path: "/portfolio", icon: Portfolio },
      { title: "Contact", path: "/contact", icon: Contact },
    ],
    social: [
      {
        path: "https://t.me/darklurkerrr",
        component: Telegram,
      },
      {
        path: "https://github.com/promter11",
        component: Github,
      },
      {
        path: "mailto:promter11@gmail.com",
        component: Email,
      },
    ],
  },
};
