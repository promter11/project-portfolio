import React from "react";
import { shallow } from "enzyme";

import User from "./index";

const props = {
  name: "John Doe",
  position: "QA Engineer",
  avatar: "../images/1",
};

describe("User component", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<User {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
