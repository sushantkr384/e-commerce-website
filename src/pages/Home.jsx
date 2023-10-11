import React from "react";
import Navbar from "../components/Navbar";
import ProductCategory from "../components/ProductCategory";
import Products from "../components/Products";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <ProductCategory />
      <Products />
      <Cart />
    </>
  );
};

export default Home;
