import React, { useState } from 'react';
import CartItemCard from '../components/CartItemCard';

function WarenkorbPage({ cartItems }) {

  return (
    <div>
     { cartItems.map(cartItem => {<CartItemCard />})}
    </div>
  )
}

export default WarenkorbPage