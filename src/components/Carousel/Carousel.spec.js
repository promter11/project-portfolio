import React from "react";
import { shallow } from "enzyme";

import Carousel from "./index";

const props = {
  slides: [
    {
      title: "Title",
      date: "December 24, 2000",
      description: "Short description",
      fullDescription: "Full description",
      technologies: ["1", "2"],
      image: "../images/1",
      link: {
        text: "Learn more",
        path: "/",
      },
    },
    {
      title: "Title",
      date: "October 12, 1995",
      description: "Short description",
      fullDescription: "Full description",
      technologies: ["1", "2", "3"],
      image: "../images/2",
      link: {
        text: "Learn more",
        path: "/",
      },
    },
  ],
};

describe("Carousel component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Carousel {...props} />);
  });

  it("renders correctly with items", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("check onInit function in Swiper component", () => {
    const mockFn = jest.fn();

    wrapper.find(".swiper").props.onInit = mockFn;
    wrapper.find(".swiper").props.onInit();

    expect(mockFn).toHaveBeenCalled();
  });
});
