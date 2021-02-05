import { toggleStatus } from "../../actions/SidebarActions";

import SidebarReducer from "./index";

describe("Sidebar reducer", () => {
  let initialStateMock;

  beforeAll(() => {
    initialStateMock = {
      sidebarStatus: false,
    };
  });

  it("should return the initial state", () => {
    expect(SidebarReducer(undefined, {})).toEqual(initialStateMock);
  });

  it("should handle TOGGLE_STATUS", () => {
    const expectedValue = {
      sidebarStatus: !initialStateMock.sidebarStatus,
    };

    expect(SidebarReducer(initialStateMock, toggleStatus())).toEqual(
      expectedValue
    );
  });
});
