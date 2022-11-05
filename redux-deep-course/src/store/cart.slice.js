import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./ui.slice";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, actions) {
      const newItem = actions.payload;
      const isExistItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
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
        isExistItem.totalPrice = isExistItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, actions) {
      const id = actions.payload.id;
      const isExistItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (isExistItem && state.totalQuantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      if (isExistItem && state.totalQuantity >= 1) {
        isExistItem.quantity--;
        isExistItem.totalPrice = isExistItem.totalPrice - isExistItem.price;
      }
    },
  },
});

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Pending...",
        message: "Sending cart data",
      })
    );

    const sendingRequest = async () => {
      try {
        await fetch(
          "https://redux-deep-course-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cartData),
          }
        );
      } catch (error) {
        console.log("error : ", error);
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendingRequest();
      showNotification({
        status: "success",
        title: "success!",
        message: "Sending cart data successfully !",
      });
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "error!",
          message: "Sending cart data failed",
        })
      );
    }
    //
  };
};

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
