import {
  LOAD_ANSWER,
  LOAD_BUTTONS,
  LOAD_CLEAR,
  LOAD_BACKSPACE,
} from "../actionTypes";

let initialState = {
  number: "",
  ans: "",
};

export const calculatorReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOAD_BUTTONS:
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload),
      };

    case LOAD_ANSWER:
      console.log(state.number);
      try {
        return {
          ...state,
          ...payload,
          ans: Function(`return ${state.number}`)(),
        };
      } catch (err) {
        return {
          ...state,
          ...payload,
          ans: "Error",
        };
      }

    case LOAD_CLEAR:
      return {
        ...state,
        ...payload,
        number: "",
        ans: "",
      };

    case LOAD_BACKSPACE:
      return {
        ...state,
        ...payload,
        number: state.number.slice(0, -1),
        ans: "",
      };

    default:
      return state;
  }
};
