import configureStore from "redux-mock-store";
import { shallow } from "enzyme";

import Content from "./index";

const configureMockStore = configureStore();

const initialState = {
  LanguageReducer: {
    defaultLanguage: {
      language: "RU",
      icon: "russia.svg",
    },
  },
};

const store = configureMockStore(initialState);

describe("Content container", () => {
  it("should renders correctly with props", () => {
    const wrapper = shallow(<Content store={store} />).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
