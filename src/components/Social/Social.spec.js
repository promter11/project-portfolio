import React from "react";
import { shallow } from "enzyme";

import Social from "./index";

import { ReactComponent as MockComponent } from "../../assets/icons/aside/telegram.svg";

const props = {
  socials: [
    {
      path: "https://link.com",
      component: MockComponent,
    },
    {
      path: "https://path.ru",
      component: MockComponent,
    },
    {
      path: "mailto:example@gmail.com",
      component: MockComponent,
    },
  ],
};

describe("Social component", () => {
  it("renders correctly with items", () => {
    const wrapper = shallow(<Social {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
