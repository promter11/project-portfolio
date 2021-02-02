import React from "react";
import { shallow } from "enzyme";

import Slide from "./index";

const props = {
  title: "Title",
  date: "02 November, 1997",
  description: "Short description",
  fullDescription: "Full description",
  technologies: ["1", "2"],
  image: "../images/1",
  link: {
    text: "Link",
    path: "/",
  },
};

describe("Slide component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Slide {...props} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("check setModalStatus function", () => {
    it("calls function in button", () => {
      wrapper.find(".button").simulate("click");

      expect(wrapper.find("Modal").prop("modalStatus")).toEqual(true);
    });

    it("calls function in Modal", () => {
      wrapper.find("Modal").props().toggleModal();

      expect(wrapper.find("Modal").prop("modalStatus")).toEqual(true);
    });
  });
});
