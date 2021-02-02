import React from "react";
import { shallow } from "enzyme";

import Burger from "./index";

const props = {
  status: false,
  onToggleStatus: jest.fn(),
};

describe("Burger component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Burger {...props} />);
  });

  it("renders correctly with props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("simulates onClick event on onToggleStatus function", () => {
    wrapper.find("ul").simulate("click");

    expect(props.onToggleStatus).toHaveBeenCalled();
  });
});
