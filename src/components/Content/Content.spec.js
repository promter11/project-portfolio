import React from "react";
import { shallow } from "enzyme";

import Content from "./index";

describe("Content component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Content language="RU" />);

    expect(wrapper).toMatchSnapshot();
  });
});
