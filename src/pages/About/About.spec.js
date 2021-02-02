import React from "react";
import { shallow } from "enzyme";

import About from "./index";

const props = {
  language: "RU",
};

describe("About page", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<About {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
