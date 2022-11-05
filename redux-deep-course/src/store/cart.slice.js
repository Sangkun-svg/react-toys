import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, actions) {
      state.totalQuantity = actions.payload.totalQuantity;
      state.items = actions.payload.items;
    },
    addItemToCart(state, actions) {
      const newItem = actions.payload;
      const isExistItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!isExistItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      if (isExistItem) {
        isExistItem.quantity++;
        isExistItem.totalPrice = state.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, actions) {
      const id = actions.payload.id;
      const isExistItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (isExistItem && state.totalQuantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      if (isExistItem && state.totalQuantity >= 1) {
        isExistItem.quantity--;
        isExistItem.totalPrice = state.totalPrice - isExistItem.price;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, replaceCart } =
  cartSlice.actions;
export default cartSlice.reducer;
