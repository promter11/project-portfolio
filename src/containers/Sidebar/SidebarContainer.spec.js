import configureStore from "redux-mock-store";
import { shallow } from "enzyme";

import Sidebar from "./index";

const configureMockStore = configureStore();

const initialState = {
  LanguageReducer: {
    defaultLanguage: {
      language: "RU",
      icon: "russia.svg",
    },
  },
  SidebarReducer: {
    sidebarStatus: false,
  },
};

const store = configureMockStore(initialState);

describe("Sidebar container", () => {
  it("should renders correctly with props", () => {
    const wrapper = shallow(<Sidebar store={store} />).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
