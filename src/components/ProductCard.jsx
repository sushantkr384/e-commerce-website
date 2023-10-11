import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const ProductCard = ({ id, img, name, price, rating, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-red-200 p-5 flex flex-col gap-2 rounded-lg">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-orange-600" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, img, name, price, rating, qty: 1 }));
            handleToast();
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
