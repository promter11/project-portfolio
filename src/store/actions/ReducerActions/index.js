import { TEST_CONSTANT } from "../../constants/ReducerConstants";

export const testConstant = (payload) => {
  return {
    type: TEST_CONSTANT,
    payload,
  };
};
