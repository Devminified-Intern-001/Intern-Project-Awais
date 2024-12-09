import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="relative flex h-[300px] sm:h-[350px] md:h-[400px] w-full max-w-[1149px] rounded-[43px] overflow-hidden my-8 mx-auto">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[43px]"
        style={{
          backgroundImage: "url('/home/banner.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-primary/5 rounded-[43px]" />
      <div className="relative h-full flex flex-col justify-center p-6 md:p-8 text-background ml-6 md:ml-14">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-[#EFFAAE]">
          For the selected products
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#EFFAAE]">
          Get Discount up to
        </h3>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-background">
          50% Off
        </p>
        <Button className="bg-[#EFFAAE] text-primary w-fit flex items-center rounded-[85px] px-4 sm:px-6 py-2 sm:py-3">
          See more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
