import React from "react";
import { shallow } from "enzyme";

import Info from "./index";

const items = [
  {
    image: "C:/Development/Front",
    value: "Test",
    path: "/path",
  },
  {
    image: "C:/Development/Front/Other",
    value: "Test 2",
    path: "/link",
  },
  {
    image: "C:/Development/Front/NoLink",
    value: "Test 2",
  },
];

describe("Info component", () => {
  it("renders correctly with items", () => {
    const wrapper = shallow(<Info items={items} />);

    expect(wrapper).toMatchSnapshot();
  });
});
