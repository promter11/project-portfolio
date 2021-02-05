import { getLanguage, getLanguageState } from "./index";

describe("Language selectors", () => {
  it("should return default language", () => {
    const mockState = {
      LanguageReducer: {
        defaultLanguage: {
          language: "RU",
        },
      },
    };

    expect(getLanguage(mockState)).toEqual("RU");
  });

  it("should return entire state of LanguageReducer", () => {
    const mockState = {
      LanguageReducer: {
        toggle: false,
        defaultLanguage: {
          language: "RU",
          icon: "../some/path",
        },
        languagesList: [
          {
            language: "RU",
            icon: "../icons/ru",
          },
          {
            language: "EN",
            icon: "../icons/uk",
          },
        ],
      },
    };

    expect(getLanguageState(mockState)).toEqual(mockState.LanguageReducer);
  });
});
