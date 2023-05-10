import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from '../redux/slice/CartSlice'
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCart= () =>{
        dispatch(remove(item.id))
        toast.success("Item removed")
    }
  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4">
      <div className="flex item-center">
        <img
          src={item.image}
          className="h-20 w-[80px] object-cover rounded"
          alt="Not found"
        />
        <div className="ml-4">
          <h1 className="font-bold text-lg">{item.title}</h1>
          <h1 className="text-gray-500">{item.description}</h1>
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-lg">${item.price}</p>
        <button onClick={removeFromCart} className="ml-4">
          <FcDeleteDatabase className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
