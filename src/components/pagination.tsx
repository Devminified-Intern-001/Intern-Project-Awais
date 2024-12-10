import React from "react";
import { Button } from "./ui/button";

const Pagination = () => {
  return (
    <div className="flex justify-center gap-2">
      {/* Active page */}
      <Button className="w-8 h-8 rounded-full flex items-center justify-center bg-accent text-primary cursor-pointer hover:bg-accent">
        1
      </Button>

      {/* Inactive page */}
      <Button className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary font-basic-commercial font-bold text-[#909090] cursor-pointer hover:bg-accent">
        2
      </Button>

      {/* Forward arrow */}
      <Button className="w-8 h-8 rounded-full flex items-center justify-center font-basic-commercial font-bold text-[#909090] cursor-pointer hover:bg-accent">
        &raquo;
      </Button>
    </div>
  );
};

export default Pagination;
