import React from "react";
import ProductCard from "./ProductCard";
import Data from "../data/Data.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Products = (name) => {
  const category = useSelector((state) => state.category.category);
  const handleToast = (name) => toast.success("item added to cart");
  const search = useSelector((state) => state.search.search);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6
           my-8"
      >
        {Data.filter((product) => {
          if (category === "All") {
            return product;
          } else {
            return category === product.category;
          }
        }).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            rating={product.rating}
            img={product.thumbnail}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default Products;

// icon: "👋",
