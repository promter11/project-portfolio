import React from "react";
import { shallow } from "enzyme";

import Contact from "./index";

const props = {
  language: "RU",
};

describe("Contact page", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<Contact {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
