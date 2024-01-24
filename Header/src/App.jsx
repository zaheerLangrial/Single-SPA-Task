import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [cartProductLength, setCartProductLength] = useState(0);

  useEffect(() => {
    fetchCartProduct();
  });

  const fetchCartProduct = async () => {
    const res = await axios.get(
      "https://65b0d86ad16d31d11bdd61cb.mockapi.io/api/cartProducts/cartProducts"
    );
    setCartProductLength(res.data.length);
    console.log(cartProductLength)
  };
  return (
    <BrowserRouter>
      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <div>
        <h1>Shoping Center</h1>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <button><Link to="/">Products</Link></button>
        <button><Link to="/cart">Cart ({cartProductLength})</Link></button>
        {/* <button>Products</button> */}
        {/* <Link to={'/cart'}>Cart (0)</Link> */}
        {/* <button>Cart ({cartProductLength})</button> */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
