import { SET_TOGGLE, SET_LANGUAGE } from "../../constants/LanguageConstants";

export const setToggle = () => {
  return {
    type: SET_TOGGLE,
  };
};

export const setLanguage = (id) => {
  return {
    type: SET_LANGUAGE,
    id,
  };
};
