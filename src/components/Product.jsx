import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import {toast} from "react-hot-toast"

const Product = ({ post }) => {
  
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post))
    toast.success("Item added Successfully")
  }

  const removeCart = () => {
    dispatch(remove(post.id))
    toast.error("Item remove successfully");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition-all duration-200 ease-in gap-3 p-2 md:p-4 mt-10 ml-5 rounded-xl  hover:shadow-2xl shadow-black/5 dark:shadow-black/30 shadow-inner">
      <div>
        <p className="text-gray-700 font-semibold text-lg  text-left truncate w-[300px] md:w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="md:w-40 w-[300px] text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}{" "}
        </p>
      </div>
      <div className="md:h-[180px] h-[150px] w-[150px]">
        <img
          src={post.image}
          alt="post"
          width={200}
          className="w-full h-full"
        />
      </div>
      <div className=" flex justify-evenly md:justify-between items-center md:gap-12 w-full mt-5">
        <p className="text-green-500 text-sm font-semibold ">${post.price} </p>

        <div className="rounded-2xl border-2 text-gray-700 px-3 py-2 hover:bg-gray-500 hover:text-white text-[12px] font-semibold">
          {cart.some((p) => p.id === post.id) ? (
            <button onClick={removeCart}>Remove Item </button>
          ) : (
            <button onClick={addToCart}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product
