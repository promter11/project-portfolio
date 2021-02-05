import { setToggle, setLanguage } from "../../actions/LanguageActions";

import LanguageReducer from "./index";

describe("Language reducer", () => {
  let initialStateMock;

  beforeAll(() => {
    initialStateMock = {
      toggle: false,
      defaultLanguage: {
        language: "RU",
        icon: "russia.svg",
      },
      languagesList: [
        {
          language: "RU",
          icon: "russia.svg",
        },
        {
          language: "EN",
          icon: "uk.svg",
        },
      ],
    };
  });

  it("should return the initial state", () => {
    expect(LanguageReducer(undefined, {})).toEqual(initialStateMock);
  });

  it("should handle SET_TOGGLE", () => {
    const expectedValue = {
      ...initialStateMock,
      toggle: !initialStateMock.toggle,
    };

    expect(LanguageReducer(initialStateMock, setToggle())).toEqual(
      expectedValue
    );
  });

  it("should handle SET_LANGUAGE", () => {
    const id = 1;
    const expectedValue = {
      ...initialStateMock,
      toggle: !initialStateMock.toggle,
      defaultLanguage: initialStateMock.languagesList[id],
    };

    expect(LanguageReducer(initialStateMock, setLanguage(id))).toEqual(
      expectedValue
    );
  });
});
