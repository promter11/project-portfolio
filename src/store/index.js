import { createStore } from "redux";

import rootReducer from "../store/reducers";
import { loadState, saveState } from "../common/localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveState(store.getState()));

export default store;
