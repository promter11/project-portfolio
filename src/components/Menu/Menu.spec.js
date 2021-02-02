import React from "react";
import { shallow } from "enzyme";

import Menu from "./index";

const props = {
  items: [
    { title: "Home", path: "/", icon: "../icons/menu/1" },
    { title: "About", path: "/about", icon: "../icons/menu/2" },
  ],
  onToggleStatus: jest.fn(),
};

describe("Menu component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu {...props} />);
  });

  it("renders correctly with props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("simulates onClick event on onToggleStatus function", () => {
    wrapper.find("NavLink").at(0).simulate("click");

    expect(props.onToggleStatus).toHaveBeenCalled();
  });
});
