"use client";

import FilterSidebar from "@/components/filter-sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-Section";
import { Pagination } from "@/components/ui/pagination";
import ProductCard from "@/components/product-card";
import React from "react";

const Products = () => {
  const products = [
    {
      name: "Product Name",
      price: 50,
      image: "/carrot.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/cabbage.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/tomato.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/cabbage.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/tomato.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/tomato.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/cabbage.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/tomato.svg",
    },
    {
      name: "Product Name",
      price: 50,
      image: "/tomato.svg",
    },
  ];

  return (
    <div className="bg-background">
      <Header />

      <HeroSection
        title={
          <>
            <span className=" text-primary">Deliver to your</span>
            <br />
            <span className=" text-primary">Door step!</span>
          </>
        }
        backgroundImage="/productbg.png"
      />

      <div className="container p-32 bg-background">
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar />
          <div className="flex-1 relative -top-20">
            <ProductCard
              title="Vegetables"
              items={products}
              showQuantity={true}
              showButton={true}
              cols="3"
            />
            <div className="mt-8 flex justify-center">
              <Pagination />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
