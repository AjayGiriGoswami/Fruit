import React, { useState } from "react";
import "./App.css";
import Main from "./Components/Pages/Main";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [cart, setcart] = useState([]);
  const [show, setshow] = useState(false);

  const handleitem = (item) => {
    let present = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        present = true;
        alert("Already Add in Cart");
        return;
      }
    });
    if (present) return;
    setcart([...cart, item]);
  };

  const remove = (id) => {
    setcart(cart.filter((x) => x.id !== id));
  };

  const addItem = (item) => {
    const existItem = cart.find((x) => x.id === item.id);
    if (existItem) {
      setcart(
        cart.map((x) => (x.id === item.id ? { ...x, Amount: x.Amount + 1 } : x))
      );
    } else {
      setcart([...cart, { ...item, Amount: 1 }]);
    }
  };

  const DecreaseItem = (item) => {
    const updatedCart = cart.map((x) =>
      x.id === item.id
        ? { ...x, Amount: x.Amount > 1 ? x.Amount - 1 : x.Amount }
        : x
    );
    setcart(updatedCart);
  };

  const clearCart = () => {
    setcart([]);
  };
  return (
    <div>
      <Navbar size={cart.length} setshow={setshow}/>
      {show ? (
        <Cart
          cart={cart}
          remove={remove}
          addItem={addItem}
          DecreaseItem={DecreaseItem}
          clearCart={clearCart}
        />
      ) : (
        <Main handleitem={handleitem} />
      )}
    </div>
  );
};

export default App;
