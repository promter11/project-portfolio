import { TOGGLE_STATUS } from "../../constants/SidebarConstants";

const initialState = {
  status: false,
};

const SidebarReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_STATUS:
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
};

export default SidebarReducer;
