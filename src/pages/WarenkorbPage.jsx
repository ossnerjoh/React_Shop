import React, { useState } from "react";
import CartItemCard from "../components/CartItemCard";

function WarenkorbPage({ cartItems, handleDelete }) {
  return (
    <div className="container">
      {cartItems.map((cartItem) => {
        return (
          <CartItemCard
            product={cartItem}
            id={cartItem.id}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default WarenkorbPage;
