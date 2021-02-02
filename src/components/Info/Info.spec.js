import React from "react";
import { shallow } from "enzyme";

import Info from "./index";

const items = [
  {
    image: "../images/info/1",
    value: "Test",
    path: "/path",
  },
  {
    image: "../images/info/2",
    value: "Test 2",
    path: "/link",
  },
  {
    image: "../images/info/3",
    value: "Test 3",
  },
];

describe("Info component", () => {
  it("renders correctly with items", () => {
    const wrapper = shallow(<Info items={items} />);

    expect(wrapper).toMatchSnapshot();
  });
});
