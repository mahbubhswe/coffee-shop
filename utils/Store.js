import { createContext, useReducer } from "react";
import { Store } from "react-notifications-component";

export const contextStore = createContext();
function givAlert(msg) {
  Store.addNotification({
    title: "Warning",
    message: msg,
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1000,
      onScreen: true,
    },
  });
}
const initialState = {
  cart: {
    cartItems: [],
    orderInfo: {},
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ORDER_INFO": {
      const newInfo = action.payload;
      return { ...state, cart: { ...state.cart, orderInfo: newInfo } };
    }
    case "ADD_TO_CART": {
      let allredyIncart = false;
      const newItem = action.payload;
      const exitItems = state.cart.cartItems.slice();
      exitItems.forEach((element) => {
        if (element.name === newItem.name) {
          allredyIncart = true;
        }
      });
      if (!allredyIncart) {
        exitItems.push(newItem);
      }

      return { ...state, cart: { ...state.cart, cartItems: exitItems } };
    }
    case "REMOVE_ITEM": {
      if (confirm("It's going to delete all items from your cart.") == true) {
        const removeItem = action.payload;
        const exitItems = state.cart.cartItems.slice();

        const index = exitItems.indexOf(removeItem);
        if (index > -1) {
          exitItems.splice(index, 1);
        }

        return { ...state, cart: { ...state.cart, cartItems: exitItems } };
      }
      return state;
    }
    case "CART_PLUS": {
      let newItem = action.payload;
      let exitItems = state.cart.cartItems.slice();

      exitItems.forEach((element) => {
        if (element.id === newItem.id) {
          element.qty++;
        }
      });

      return { ...state, cart: { ...state.cart, cartItems: exitItems } };
    }
    case "CART_MINUS": {
      const newItem = action.payload;
      const exitItems = state.cart.cartItems.slice();
      exitItems.forEach((element) => {
        if (element.name === newItem.name) {
          if (element.qty == 0) {
            givAlert("Sorry, you have reached in minimum quantity!");
            return state;
          }
          element.qty--;
        }
      });

      return { ...state, cart: { ...state.cart, cartItems: exitItems } };
    }
    default:
      return state;
  }
};
export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <contextStore.Provider value={value}>
      {props.children}
    </contextStore.Provider>
  );
}
