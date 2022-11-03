import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  isShow: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleHandler(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const { toggleHandler } = uiSlice.actions;
export default uiSlice.reducer;
