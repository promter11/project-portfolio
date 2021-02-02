import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Modal from "./index";

const props = {
  modalStatus: false,
  toggleModal: jest.fn(),
};

describe("Modal component", () => {
  let wrapper;

  beforeEach(() => {
    ReactDOM.createPortal = jest.fn((element) => element);

    wrapper = shallow(<Modal {...props}>Content</Modal>);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it("renders correctly with props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("simulates onClick event on toggleModal function", () => {
    wrapper.find(".overlay").simulate("click");

    expect(props.toggleModal).toHaveBeenCalled();
  });
});
