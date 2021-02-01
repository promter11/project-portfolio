import { TOGGLE_STATUS } from "../../constants/SidebarConstants";

const initialState = {
  sidebarStatus: false,
};

const SidebarReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_STATUS:
      return {
        ...state,
        sidebarStatus: !state.sidebarStatus,
      };
    default:
      return state;
  }
};

export default SidebarReducer;
