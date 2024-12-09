"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";

interface ProductItem {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  title?: string;
  href?: string;
  cols?: string;
  items: ProductItem[];
  showQuantity?: boolean;
  showButton?: boolean;
  className?: string;
}

export default function ProductCard({
  title,
  href = "",
  cols = "4",
  items,
  showQuantity = true,
  showButton = false,
  className = "",
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const renderCard = (product: ProductItem) => (
    <Card
      key={product.name}
      className={`group relative overflow-hidden min-h-52 border-none shadow-none p-2 transition-all duration-300 hover:shadow-2xl hover:border rounded-3xl ${className}`}
    >
      <div className="flex flex-col transition-all duration-300 items-center min-h-[320px]">
        <Image
          src={product.image}
          alt={product.name}
          width={56}
          height={56}
          priority
          className="w-28 h-28 object-contain mb-4"
        />

        <h3 className="font-light text-lg text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-xl font-light text-gray-900 mb-4">
          {product.price}$
        </p>

        {showQuantity && (
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center max-h-0 group-hover:max-h-10 opacity-0 transition-all duration-700 group-hover:opacity-100 overflow-hidden">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-200 bg-accent/30"
                onClick={() => decrementQuantity()}
              >
                <Minus className="h-4 w-4 text-grey" />
              </Button>
              <span className="mx-5 text-xl font-bold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-200 bg-accent/30"
                onClick={() => incrementQuantity()}
              >
                <Plus className="h-4 w-4 text-grey" />
              </Button>
            </div>
            <Button className="w-full bg-accent text-primary font-bold md:w-40 shadow-md rounded-full h-12 min-w-40 transition-colors duration-200">
              Add to cart
            </Button>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <section className="flex flex-col flex-wrap mt-20">
      <div className="flex items-center justify-between mb-8">
        {title && <h2 className="text-3xl font-bold">{title}</h2>}
        {showButton && (
          <Link
            href={href}
            className="text-black text-sm flex items-center justify-center font-bold"
          >
            See more
            <span>
              <Image
                src="/home/rarr.svg"
                className="ml-4"
                alt="rightArr"
                height={9}
                width={20.2}
              />
            </span>
          </Link>
        )}
      </div>
      <div className="mb-8">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-6 w-full min-h-52`}
        >
          {items.map((item) => renderCard(item))}
        </div>
      </div>
    </section>
  );
}
