import React from "react";
import { shallow } from "enzyme";

import Preloader from "./index";

const props = {
  loading: true,
};

describe("Preloader component", () => {
  it("renders correctly with props", () => {
    const wrapper = shallow(<Preloader {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
