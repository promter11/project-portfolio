import { SET_TOGGLE, SET_LANGUAGE } from "../../constants/LanguageConstants";
import { setToggle, setLanguage } from "./index";

describe("Language action creator", () => {
  it("should create an action to toggle language block status", () => {
    const expectedAction = {
      type: SET_TOGGLE,
    };

    expect(setToggle()).toEqual(expectedAction);
  });

  it("should create an action to set language", () => {
    const id = 0;
    const expectedAction = {
      type: SET_LANGUAGE,
      id,
    };

    expect(setLanguage(id)).toEqual(expectedAction);
  });
});
