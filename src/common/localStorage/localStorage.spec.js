import { loadState, saveState } from "./index";

describe("localStorage", () => {
  beforeAll(() => {
    jest.spyOn(Storage.prototype, "getItem");
    jest.spyOn(Storage.prototype, "setItem");
  });

  describe("loadState function", () => {
    it("check a loadState function returns undefined", () => {
      loadState();

      expect(localStorage.getItem("state")).toBeUndefined();
    });
  });

  describe("saveState function", () => {
    it("check a saveState function works correctly", () => {
      saveState({ id: 1 });

      expect(localStorage.setItem).toHaveBeenCalledWith(
        "state",
        JSON.stringify({ id: 1 })
      );
    });
  });
});
