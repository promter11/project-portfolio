import { SET_TOGGLE, SET_LANGUAGE } from "../../constants/LanguageConstants";

import RussiaFlag from "../../../assets/icons/aside/russia.svg";
import EnglandFlag from "../../../assets/icons/aside/uk.svg";

const initialState = {
  toggle: false,
  defaultLanguage: {
    language: "RU",
    icon: RussiaFlag,
  },
  languagesList: [
    {
      language: "RU",
      icon: RussiaFlag,
    },
    {
      language: "UK",
      icon: EnglandFlag,
    },
  ],
};

const LanguageReducer = (state = initialState, action) => {
  const { type, id } = action;

  switch (type) {
    case SET_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        toggle: !state.toggle,
        defaultLanguage: state.languagesList[id],
      };
    default:
      return state;
  }
};

export default LanguageReducer;
