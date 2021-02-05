import { getSidebarStatus } from "./index";

describe("Sidebar selectors", () => {
  it("should return a sidebar status", () => {
    const mockState = {
      SidebarReducer: {
        sidebarStatus: false,
      },
    };

    expect(getSidebarStatus(mockState)).toEqual(false);
  });
});
