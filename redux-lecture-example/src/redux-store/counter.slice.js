import redux from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShow: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.isShow = !state.isShow;
    },
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
