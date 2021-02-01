import React from "react";
import { shallow } from "enzyme";

import Container from "./index";

describe("Container component", () => {
  it("renders correctly", () => {
    const tree = shallow(<Container />);

    expect(tree).toMatchSnapshot();
  });
});
