import React from "react";
import { shallow } from "enzyme";

import NoMatch from "./index";

const props = {
  language: "RU",
};

describe("NoMatch page", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<NoMatch {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
