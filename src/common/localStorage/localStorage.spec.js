import { loadState, saveState } from "./index";

const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("localStorage", () => {
  describe("loadState function", () => {
    it("returns undefined", () => {
      expect(loadState()).toBeUndefined();
    });

    it("returns serialized state", () => {
      saveState({ id: 1 });

      expect(loadState()).toStrictEqual({ id: 1 });
    });
  });

  describe("saveState function", () => {
    it("works correctly", () => {
      expect(saveState({ id: 1 })).toBeUndefined();
    });
  });
});
