import React from "react";
import { shallow } from "enzyme";

import ContactForm from "./index";

const props = {
  language: "RU",
};

describe("ContactForm component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactForm {...props} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("Functions", () => {
    it("should call setModalStatus function", () => {
      wrapper.find("Modal").props().toggleModal();

      expect(wrapper.find("Modal").prop("modalStatus")).toEqual(true);
    });

    it("should submit form", () => {
      wrapper.find("ReactFinalForm").simulate("submit");

      expect(wrapper.find("Modal").prop("modalStatus")).toEqual(true);
    });
  });
});
