import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {Link} from 'react-router-dom'
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setAmount(cart.reduce((sum, curr) => sum + curr.price, 0));
  }, [cart]);
  return (
    <div className="container mx-auto py-10">
      {cart.length > 0 ? (
        <div className="grid grid-cols-12 gap-6">
          <div className="bg-white p-4 col-span-8 rounded shadow">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item}></CartItem>
            ))}
          </div>
          <div className="bg-white col-span-4 p-4 rounded shadow">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-bold">Your Cart</h1>
                <h1 className="text-xl font-bold">{cart.length} Items</h1>
              </div>
              <div className="border-b border-gray-300 mb-4">
                <h1>Summary</h1>
                <div className="flex justify-between">
                  <p >Total Amount :</p>
                  <p className="font-bold">${amount}</p>
                </div>
              </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to='/'><button>Shop Now</button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
