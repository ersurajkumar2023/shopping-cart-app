import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { remove } from "../redux/Slices/CartSlice"
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeCart = () => {
    dispatch(remove(item.id));
    toast.error("Item deleted!")
  }
  return (
    <div className="flex flex-row mx-auto gap-5 mt-5pt-5 border-b-2 border-gray-500  py-5 ">
      <div className=" hidden md:block w-[180px]">
        <img src={item.image} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col space-y-5">
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title}
          </h1>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
            {item.description}
          </p>
        </div>
        <div className="md:hidden w-[180px]">
          <img src={item.image} alt="" className="w-full h-full" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-green-500 text-sm font-semibold ">${item.price}</p>
          <button
            onClick={removeCart}
            className="rounded-full bg-red-300 px-3 py-3"
          >
            <AiTwotoneDelete className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem