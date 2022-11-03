import redux from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter.slice";
import authSlice from "./auth.slice";

/** Using Redux 
 * const counterReducer = (state = initialCounterState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      isShow: state.isShow,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      isShow: state.isShow,
    };
  }

  if (action.type === "toggle") {
    console.log("here");
    return {
      counter: state.counter,
      isShow: !state.isShow,
    };
  }

  return state;
};
 * 
*/

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
