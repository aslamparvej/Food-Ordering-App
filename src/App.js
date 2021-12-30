import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [showIsCart, setShowIsCart] = useState(false);

  const showCartHandler = ()=>{
    setShowIsCart(true);
  }

  const hideCartHandler = ()=>{
    setShowIsCart(false);
  }

  return (
    <CartProvider>
      {showIsCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
