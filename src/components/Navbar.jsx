import React from "react";
import { setSearch } from "../redux/slices/SearchSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-5 my-4">
      <div>
        <h3 className="text-xl font-bold text-gray-700">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold py-2">e-commerce-website</h1>
      </div>
      <div>
        <input
          type="search"
          name="search-bar"
          id=""
          placeholder="serch product"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-red-400 rounded-lg
           w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
