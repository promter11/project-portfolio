import configureStore from "redux-mock-store";
import { shallow } from "enzyme";

import Language from "./index";

const configureMockStore = configureStore();

const initialState = {
  LanguageReducer: {
    toggle: false,
    defaultLanguage: {
      language: "RU",
      icon: "russia.svg",
    },
    languagesList: [
      {
        language: "RU",
        icon: "russia.svg",
      },
      {
        language: "EN",
        icon: "uk.svg",
      },
    ],
  },
};

const store = configureMockStore(initialState);

describe("Language container", () => {
  it("should renders correctly with props", () => {
    const wrapper = shallow(<Language store={store} />).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
