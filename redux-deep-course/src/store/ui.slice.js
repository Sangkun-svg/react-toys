import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  isShow: false,
  notification: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleHandler(state) {
      state.isShow = !state.isShow;
    },
    showNotification(state, actions) {
      const { status, title, message } = actions.payload;
      state.notification = { status, title, message };
    },
  },
});

export const { toggleHandler, showNotification } = uiSlice.actions;
export default uiSlice.reducer;
