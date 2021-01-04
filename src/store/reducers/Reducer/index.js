import { TEST_CONSTANT } from "../../constants/ReducerConstants";

const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_CONSTANT:
      return [...initialState, 1];
    default:
      return state;
  }
};

export default Reducer;
