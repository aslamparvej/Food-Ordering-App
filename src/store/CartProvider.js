import React, { useReducer } from "react";
import CartContetxt from "./Cart-Context";

const defaultCartState = {
  item: [],
  totalAMount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAMount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAMount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id }); 
  };
  
  const cartContetxt = {
    items: cartState.item,
    totalAMount: cartState.totalAMount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContetxt.Provider value={cartContetxt}>
      {props.children}
    </CartContetxt.Provider>
  );
};
export default CartProvider;
