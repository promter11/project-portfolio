import React from "react";
import { shallow } from "enzyme";

import Portfolio from "./index";

const props = {
  language: "RU",
};

describe("Portfolio page", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<Portfolio {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
