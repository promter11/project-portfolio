import React from "react";
import { shallow } from "enzyme";

import App from "./index";

jest.useFakeTimers();

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("calls a function with setTimeout", (done) => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    jest.advanceTimersByTime(3000);

    setTimeout(() => {
      expect(wrapper.find("Preloader")).toBeFalsy();
    }, 3000);

    jest.useRealTimers();

    done();
  });
});
