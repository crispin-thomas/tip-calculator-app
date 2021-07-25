import { FETCH_VAR } from "../action/types";

const initialState = {
  bill: "",
  nop: "",
  options: "",
  custom: "",
};

export default function varReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_VAR:
      return action.payload;
    default:
      return state;
  }
}
