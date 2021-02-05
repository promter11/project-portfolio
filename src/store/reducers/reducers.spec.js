import { createStore } from "redux";

import rootReducer from "./index";
import LanguageReducer from "./LanguageReducer";
import SidebarReducer from "./SidebarReducer";

const store = createStore(rootReducer);

describe("Reducers", () => {
  it("check combineReducers works correctly", () => {
    expect(store.getState().LanguageReducer).toEqual(
      LanguageReducer(undefined, {})
    );
    expect(store.getState().SidebarReducer).toEqual(
      SidebarReducer(undefined, {})
    );
  });
});
