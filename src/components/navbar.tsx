"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  { name: "Fruits", icon: "/heroSection/Fruits.svg" },
  { name: "Vegetables", icon: "/heroSection/vegetables.svg" },
  { name: "Meat", icon: "/heroSection/meat.svg" },
  { name: "Seafood", icon: "/heroSection/seafood.svg" },
  { name: "Snacks", icon: "/heroSection/snacks.svg" },
  { name: "Beverages", icon: "/heroSection/beverages.svg" },
  { name: "Frozen", icon: "/heroSection/frozen.svg" },
  { name: "Bread & Tortilla", icon: "/heroSection/bread.svg" },
  { name: "Household", icon: "/heroSection/household.svg" },
  { name: "Pantry", icon: "/heroSection/pantry.svg" },
];

export default function CategoryNav() {
  return (
    <div className="w-full relative px-4 md:px-6 lg:px-8 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-2 basis-1/3 md:basis-1/4 lg:basis-1/12 mx-4"
            >
              <Link href={`/category/${category.name.toLowerCase()}`}>
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center gap-1 justify-center p-2 cursor-pointer rounded-lg transition-colors">
                    <div className="relative w-12 h-12 mb-2">
                      <Image
                        src={category.icon}
                        alt={category.name}
                        fill
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 16vw"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm min-w-40 text-ironGrey text-center">
                      {category.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="fixed h-10 w-10 -right-5 bg-[#FBD54E] md:flex" />
        <CarouselPrevious className="fixed h-10 w-10 -left-5 bg-[#FBD54E] md:flex" />
      </Carousel>
    </div>
  );
}
