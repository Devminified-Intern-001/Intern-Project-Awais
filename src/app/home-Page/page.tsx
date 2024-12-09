"use client";
import React from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-Section";
import PromoBanner from "@/components/promo-banner";
import HygenicCard from "@/components/hygenicCard";
import SmartChoices from "@/components/smartchoices";
import ProductCard from "@/components/product-card";
import Footer from "../../components/footer";
import BrandLogo from "@/components/brandlogos";

const page = () => {
  const products = [
    {
      name: "Product 1",
      price: 50,
      image: "/home/nutela.svg",
    },
    {
      name: "Product 2",
      price: 50,
      image: "/home/burger.svg",
    },
    {
      name: "Product 3",
      price: 50,
      image: "/home/icecream.svg",
    },
    {
      name: "Product 4",
      price: 50,
      image: "/home/chips.svg",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="min-h-screen bg-gray-50">
        <Header />

        <HeroSection
          title={
            <>
              <div>We Always Provide</div>
              <div>Healthy Products</div>
            </>
          }
          backgroundImage="/heroSection/herobg.png"
        />

        <main className="max-w-7xl mx-auto px-4 py-12">
          <section className="my-40">
            <h2 className="text-3xl font-bold mb-8">Smart Choices</h2>
            <SmartChoices />
          </section>

          {/* Featured Products */}

          <ProductCard
            title="Featured"
            items={products}
            showQuantity={true}
            showButton={true}
            cols="4"
          />

          {/* Hygenic Foods */}

          <HygenicCard />

          {/* Banner */}

          <PromoBanner />

          {/* Hygenic Foods */}

          <HygenicCard />
        </main>
        <BrandLogo />

        <Footer />
      </div>
    </div>
  );
};

export default page;
