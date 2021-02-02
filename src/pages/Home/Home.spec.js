import React from "react";
import { shallow } from "enzyme";

import Home from "./index";

const props = {
  language: "RU",
};

describe("Home page", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<Home {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
