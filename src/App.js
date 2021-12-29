import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [showIsCart, setShowIsCart] = useState(false);

  const showCartHandler = ()=>{
    setShowIsCart(true);
  }

  const hideCartHandler = ()=>{
    setShowIsCart(false);
  }

  return (
    <Fragment>
      {showIsCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
