import React, { useState } from "react";
import CartItemCard from "../components/CartItemCard";

function WarenkorbPage({ cartItems }) {
  return (
    <div>
      {cartItems.map((cartItem) => {
        console.log(cartItem);
        return <CartItemCard product={cartItem} />;
      })}
    </div>
  );
}

export default WarenkorbPage;
