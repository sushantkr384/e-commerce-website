import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItems = ({ id, name, img, qty, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 rounded-lg p-2 shadow-md mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, qty, price }));
          toast("Remove from cart!", {
            icon: "👋",
          });
        }}
        className="absolute right-11 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="image" className="w-[50px] h-[50px]" />

      <div className="leading-5">
        <h2 className="text-gray-500 font-bold">{name}</h2>
        <div className="flex justify-between my-6 ">
          <span className="font-bold text-green-600">
            {"\u20B9"}:{price}
          </span>
          <div className="flex justify-center items-center gap-2 absolute right-6">
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
