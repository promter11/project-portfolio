import React from "react";
import { shallow } from "enzyme";

import Language from "./index";

const props = {
  state: {
    toggle: false,
    defaultLanguage: {
      language: "RU",
      icon: "C:/path",
    },
    languagesList: [
      {
        language: "RU",
        icon: "C:/RussianFlag/Icon",
      },
      {
        language: "EN",
        icon: "C:/UKFlag/Icon",
      },
    ],
  },
  actions: {
    setToggle: jest.fn(),
    setLanguage: jest.fn(),
  },
};

describe("Language component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Language {...props} />);
  });

  it("renders correctly with props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("simulates onClick event on setToggle function", () => {
    wrapper.find(".block > button").simulate("click");

    expect(props.actions.setToggle).toHaveBeenCalled();
  });

  it("simulates onClick event on setLanguage function", () => {
    wrapper.find(".hidden > button").at(0).simulate("click");

    expect(props.actions.setLanguage).toHaveBeenCalledWith(0);
  });
});
