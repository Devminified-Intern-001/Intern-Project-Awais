"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const smartChoiceItems = [
  {
    title: "Italian Pizza",
    description:
      "Product description is going here to describe about the product.",
    image: "/home/pizza.png",
  },
  {
    title: "Perfect Egg Dish",
    description:
      "Product description is going here to describe about the product.",
    image: "/home/egg2.png",
  },
  {
    title: "Masala Chicken Curry",
    description:
      "Product description is going here to describe about the product.",
    image: "/home/curry2.jpg",
  },
  // Repeating items for slide
  {
    title: "Italian Pizza",
    description:
      "Product description is going here to describe about the product.",
    image: "/home/pizza.png",
  },
  {
    title: "Perfect Egg Dish",
    description:
      "Product description is going here to describe about the product.",
    image: "/home/egg2.png",
  },
  {
    title: "Masala Chicken Curry",
    description:
      "Product description is going here to describe about the product.",
    image: "/home/curry2.jpg",
  },
];

export default function SmartChoiceCard() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {smartChoiceItems.map((item, idx) => (
          <CarouselItem key={idx} className="pl-4 sm:basis-1/2 lg:basis-1/3">
            <div className="relative h-60 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl text-background bg-center bg-cover w-full min-w-[300px] max-w-[450px] mx-auto bg-no-repeat overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 p-5 z-50 space-y-3 mx-4">
                <strong className="text-lg sm:text-xl md:text-2xl font-DMSans font-bold text-background leading-7 block">
                  {item.title}
                </strong>
                <p className="text-secondary text-sm sm:text-base font-light">
                  {item.description}
                </p>
              </div>
              <span className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/50 to-transparent rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"></span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden sm:flex absolute h-10 w-10 right-10 sm:-right-6 bg-accent" />
      <CarouselPrevious className="hidden sm:flex absolute h-10 w-10 right-10 sm:-left-6 bg-accent" />
    </Carousel>
  );
}
