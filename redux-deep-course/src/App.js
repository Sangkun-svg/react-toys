import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart.slice";
import { showNotification } from "./store/ui.slice";

let isInitial = true;

function App() {
  const {
    ui: { isShow, notification },
    cart,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShow && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
