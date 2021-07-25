import { FETCH_VAR } from "./types";

export const fetchVar = (variables) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_VAR,
      payload: variables,
    });
  };
};
