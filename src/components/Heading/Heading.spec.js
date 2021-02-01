import React from "react";
import { shallow } from "enzyme";

import Heading from "./index";

const props = {
  className: "k9Cds__Heading__1vt",
  level: 2
};

describe("Heading component", () => {
  it("renders correctly without props", () => {
    const wrapper = shallow(<Heading>Test</Heading>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly with props", () => {
    const wrapper = shallow(<Heading {...props}>Test</Heading>);

    expect(wrapper).toMatchSnapshot();
  });
});
