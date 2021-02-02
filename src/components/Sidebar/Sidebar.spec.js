import React from "react";
import { shallow } from "enzyme";

import Sidebar from "./index";

const props = {
  state: {
    sidebarStatus: false,
    language: "RU",
  },
  actions: {
    toggleStatus: jest.fn(),
  },
};

describe("Sidebar component", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<Sidebar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
