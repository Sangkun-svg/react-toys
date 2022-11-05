import { showNotification } from "./ui.slice";
import { replaceCart } from "./cart.slice";
const FIREBASE_URL =
  "https://redux-deep-course-default-rtdb.firebaseio.com/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(FIREBASE_URL);
      if (!response.ok) {
        throw new Error("could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(
        replaceCart(data === null ? { items: [], totalQuantity: 0 } : data)
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "error!",
          message: "fetching cart data failed",
        })
      );
    }
  };
};

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
        await fetch(FIREBASE_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        });
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
  };
};
