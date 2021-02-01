import { combineReducers } from "redux";

import LanguageReducer from "./LanguageReducer";
import SidebarReducer from "./SidebarReducer";

const rootReducer = combineReducers({
  LanguageReducer,
  SidebarReducer,
});

export default rootReducer;
