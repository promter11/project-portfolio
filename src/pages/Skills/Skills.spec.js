import React from "react";
import { shallow } from "enzyme";

import Skills from "./index";

const props = {
  language: "RU",
};

describe("Skills page", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<Skills {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
