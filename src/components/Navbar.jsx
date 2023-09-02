import React from 'react'
import { NavLink } from "react-router-dom";
import {RiShoppingCartFill} from "react-icons/ri"
import { useSelector } from 'react-redux';


const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <>
      <nav className="flex flex-row justify-between px-3 md:px-[100px] py-2 shadow-xl fixed top-0 w-full bg-slate-900 z-50">
        <div className="">
          <NavLink to="/">
            <img
              src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"
              alt=""
              className="w-[42px] rounded-3xl"
            />
          </NavLink>
        </div>
        <div className="flex space-x-5 py-2">
          <NavLink to="/">
            <p className="rounded-md border-2 text-white border-gray-500 px-2 py-1 hover:border-gray-700 hover:scale-110">
              Home
            </p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <RiShoppingCartFill className="w-[30px] h-[30px] text-white  hover:scale-110" />
              {cart.length > 0 && (
                <span className="bg-green-500 rounded-full text-sm absolute -top-1 -right-2 w-5 h-5 text-center flex justify-center items-center animate-bounce text-white  ">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar
