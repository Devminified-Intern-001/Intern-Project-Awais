import ProductCard from "./product-card";
import React from "react";

const HygenicCard = () => {
  const products = [
    {
      name: "Product 1",
      price: 50,
      image: "/carrot.svg",
    },
    {
      name: "Product 2",
      price: 50,
      image: "/cabbage.svg",
    },
    {
      name: "Product 3",
      price: 50,
      image: "/tomato.svg",
    },
    {
      name: "Product 4",
      price: 50,
      image: "/broccoli.svg",
    },
  ];
  return (
    <div>
      <ProductCard
        title="Hygenic Foods"
        items={products}
        showQuantity={true}
        showButton={true}
        cols="4"
      />
    </div>
  );
};

export default HygenicCard;
