import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux/es/exports'
import CartItem from "../components/CartItem"

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price,0));
  },[cart])
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-[100px] mb-[50px] pt-5 pb-5 ">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-12 ">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col  mt-5  rounded-2xl py-3 px-5 max-w-[300px] justify-between ">
            <div className="flex flex-col space-y-2">
              <div className="text-green-700 font-semibold">Your Cart</div>
              <div className="text-green-800 font-bold text-3xl capitalize ">
                SUMMARY
              </div>
              <p className="text-md font-semibold text-gray-600">
                Total Items: {cart.length}
              </p>
            </div>
            <div className='w-full'>
              <p className="text-md font-semibold text-gray-800">
                Total Amount: <span className='font-bold text-black'>${totalAmount}</span>
              </p>
              <button className='border-2 px-3 py-2 mt-2 w-full rounded-2xl bg-green-700 hover:bg-green-900'>Check Out</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-xl text-gray-600 font-bold leading-loose">
            Cart Empty
          </h1>
          <Link to="/">
            <button className="border-2 hover:border-green-900 rounded-2xl px-3 py-2 bg-green-600 hover:bg-green-800 text-white">
              Shop Now
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart
