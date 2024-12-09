import React, { ReactNode } from "react";
import CategoryNav from "@/components/navbar";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface HeroSectionProps {
  title: ReactNode;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,
}) => {
  return (
    <div>
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="relative flex items-center max-w-md mx-auto bg-white rounded-lg">
            <Input
              type="search"
              placeholder="What are you looking for..."
              className="border-0 focus-visible:ring-0"
            />
            <Image
              src="/search.svg"
              alt="Search Icon"
              width={16}
              height={16}
              className="absolute right-6"
            />
          </div>
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[84%] bg-white rounded-3xl shadow-lg p-4">
          <div className="flex justify-between items-center overflow-x-auto space-x-4 ">
            <CategoryNav />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
