import Olivia from "../../../assets/images/Portfolio Item 1.jpg";
import Passion from "../../../assets/images/Portfolio Item 2.jpg";
import AppLab from "../../../assets/images/Portfolio Item 3.jpg";
import Covid from "../../../assets/images/Portfolio Item 4.jpg";

export const portfolioText = {
  RU: {
    title: "Работы",
    content: [
      {
        title: "Olivia",
        date: "24 декабря, 2020",
        description: "Приложение для заказа парфюмерии",
        fullDescription:
          "Приложение для заказа парфюмерии с помощью React + MobX с фильтрами, поиском, корзиной с оформлением заказа.",
        technologies: [
          "HTML (JSX)",
          "Styled Components",
          "React JS (Class Components)",
          "MobX",
          "React Router",
          "Webpack",
        ],
        image: Olivia,
        link: {
          text: "Подробнее",
          path: "/",
        },
      },
      {
        title: "Passion",
        date: "12 августа, 2020",
        description: "SPA-приложение для скачивания обоев для рабочего стола",
        fullDescription:
          "SPA-приложение для загрузки обоев для рабочего стола с использованием библиотеки React на функциональных компонентах и хуках, с обращением к Pixabay API.",
        technologies: [
          "HTML (JSX)",
          "CSS Modules",
          "Typescript",
          "React (Hooks)",
          "Redux + Thunk",
          "React Router",
          "Webpack",
        ],
        image: Passion,
        link: {
          text: "Подробнее",
          path: "/",
        },
      },
      {
        title: "AppLab",
        date: "06 мая, 2020",
        description: "Рекламный лендинг о мобильном приложении AppLab",
        fullDescription:
          "Рекламный Landing Page про мобильное приложение AppLab с простыми анимациями, bootstrap сеткой/компонентами и небольшой функциональностью на jQuery.",
        technologies: [
          "HTML5",
          "SCSS",
          "jQuery",
          "Bootstrap 4",
          "Swiper Slider",
          "AOS JS (Animations)",
          "Gulp",
        ],
        image: AppLab,
        link: {
          text: "Подробнее",
          path: "/",
        },
      },
      {
        title: "COVID-19",
        date: "14 апреля, 2020",
        description: "Адаптивный Landing Page на тему COVID-19",
        fullDescription:
          "Адаптивный Landing Page на тему COVID-19 с небольшой функциональностью в виде плавных переходов, слайдера, модального окна и т.д., а также актуальными данными о количестве зараженных по странам, полученные по обращению к ninja-api через fetch.",
        technologies: ["PUG", "SCSS", "Vanilla JS", "Gulp"],
        image: Covid,
        link: {
          text: "Подробнее",
          path: "/",
        },
      },
    ],
  },
  EN: {
    title: "Works",
    content: [
      {
        title: "Olivia",
        date: "24 December, 2020",
        description: "Application for ordering perfumes",
        fullDescription:
          "Application for ordering perfumes using React + MobX with filters, search, shopping cart with checkout.",
        technologies: [
          "HTML (JSX)",
          "Styled Components",
          "React JS (Class Components)",
          "MobX",
          "React Router",
          "Webpack",
        ],
        image: Olivia,
        link: {
          text: "See more",
          path: "/",
        },
      },
      {
        title: "Passion",
        date: "12 August, 2020",
        description: "SPA-application for downloading wallpapers for desktop",
        fullDescription:
          "SPA-application for downloading wallpapers for desktop using React library on functional components and hooks, with reference to Pixabay API.",
        technologies: [
          "HTML (JSX)",
          "CSS Modules",
          "Typescript",
          "React (Hooks)",
          "Redux + Thunk",
          "React Router",
          "Webpack",
        ],
        image: Passion,
        link: {
          text: "See more",
          path: "/",
        },
      },
      {
        title: "AppLab",
        date: "06 May, 2020",
        description: "Advertising Landing Page about AppLab mobile application",
        fullDescription:
          "Advertising Landing Page about AppLab mobile application with simple animations, bootstrap grid / components and a little jQuery functionality.",
        technologies: [
          "HTML5",
          "SCSS",
          "jQuery",
          "Bootstrap 4",
          "Swiper Slider",
          "AOS JS (Animations)",
          "Gulp",
        ],
        image: AppLab,
        link: {
          text: "See more",
          path: "/",
        },
      },
      {
        title: "COVID-19",
        date: "14 April, 2020",
        description: "COVID-19 Responsive Landing Page",
        fullDescription:
          "Adaptive Landing Page on the COVID-19 theme with little functionality in the form of smooth transitions, a slider, a modal window, etc., as well as up-to-date data on the number of infected by country, obtained by contacting ninja-api via fetch.",
        technologies: ["PUG", "SCSS", "Vanilla JS", "Gulp"],
        image: Covid,
        link: {
          text: "See more",
          path: "/",
        },
      },
    ],
  },
};
