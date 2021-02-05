import { TOGGLE_STATUS } from "../../constants/SidebarConstants";
import { toggleStatus } from "./index";

describe("Sidebar action creator", () => {
  it("should create an action to toggle status", () => {
    const expectedAction = {
      type: TOGGLE_STATUS,
    };

    expect(toggleStatus()).toEqual(expectedAction);
  });
});
