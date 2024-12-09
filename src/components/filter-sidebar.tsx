"use client";

import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FilterSidebar() {
  const [lowerValue, setLowerValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const upperValue = 150;

  const handleLowerValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= upperValue) {
      setLowerValue(value);
    }
  };

  return (
    <div className="w-full md:w-72 space-y-6 px-8 py-5 shadow-2xl rounded-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Filter</h2>
        <Button className="text-secondary">Clear All</Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="on-sale" className="text-sm font-normal">
            On Sales
          </label>
          <Switch checked={checked} onCheckedChange={setChecked} id="on-sale" />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="new-arrivals" className="text-sm font-normal">
            New Arrivals
          </label>
          <Switch
            id="new-arrivals"
            checked={checked2}
            onCheckedChange={setChecked2}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Price Range</h3>
        <Slider defaultValue={[0]} max={150} step={1} className="w-full" />
        {/* <div className="flex items-center justify-between">
          <span className="text-sm w-16 h-8 bg-secondary text-right">0</span>
          <span className="text-secondary">To</span>
          <span className="text-sm w-16 h-8 bg-secondary text-right">150</span>
        </div> */}
        <div className="flex items-center justify-between font-normal">
          <input
            type="number"
            min="0"
            max={upperValue}
            value={lowerValue}
            onChange={handleLowerValueChange}
            className="text-sm w-16 h-8 bg-secondary text-right p-1 rounded"
          />

          <span className="text-secondary font-normal">To</span>

          <span className="text-sm w-16 h-8 bg-secondary  text-right p-1 rounded font-normal pr-4">
            {upperValue}
          </span>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="dietary">
          <AccordionTrigger className="font-bold">
            Dietary Needs
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 font-extralight">
              <div className="flex items-center space-x-2">
                <Checkbox id="sugar-free" />
                <label htmlFor="sugar-free" className="text-sm ">
                  Sugar Free
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="low-fat" />
                <label htmlFor="low-fat" className="text-sm  ">
                  Low Fat
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fat-free" />
                <label htmlFor="fat-free" className="text-sm  ">
                  Fat Free
                </label>
              </div>
              <div className="flex items-center space-x-2 ">
                <Checkbox id="vegan" />
                <label htmlFor="vegan" className="text-sm  ">
                  Vegan
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="Saturated Fat-Free" />
                <label htmlFor="Saturated Fat-Free" className="text-sm  ">
                  Saturated Fat-Free
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="Allergence Free">
          <AccordionTrigger className="font-bold">
            Allergence Free
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2  font-extralight">
              <div className="flex items-center space-x-2">
                <Checkbox id="sugar-free" />
                <label htmlFor="sugar-free" className="text-sm  ">
                  Sugar Free
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="low-fat" />
                <label htmlFor="low-fat" className="text-sm  ">
                  Low Fat
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fat-free" />
                <label htmlFor="fat-free" className="text-sm ">
                  Fat Free
                </label>
              </div>
              <div className="flex items-center space-x-2 ">
                <Checkbox id="vegan" />
                <label htmlFor="vegan" className="text-sm  ">
                  Vegan
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="Saturated Fat-Free" />
                <label htmlFor="Saturated Fat-Free" className="text-sm ">
                  Saturated Fat-Free
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="Allergence Free">
          <AccordionTrigger className="font-bold">
            Allergence Free
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 font-extralight">
              <div className="flex items-center space-x-2">
                <Checkbox id="sugar-free" />
                <label htmlFor="sugar-free" className="text-sm  ">
                  Sugar Free
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="low-fat" />
                <label htmlFor="low-fat" className="text-sm  ">
                  Low Fat
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fat-free" />
                <label htmlFor="fat-free" className="text-sm ">
                  Fat Free
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// "use client";

// import { Switch } from "@/components/ui/switch";
// import { Slider } from "@/components/ui/slider";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// export default function FilterSidebar() {
//   const initialUpperValue = 150;
//   const [range, setRange] = useState<number[]>([0, initialUpperValue]);
//   const [checked, setChecked] = useState(false);
//   const [checked2, setChecked2] = useState(false);

//   const handleRangeChange = (value: number[]) => {
//     setRange(value);
//   };

//   const handleLowerValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && value >= 0 && value <= range[1]) {
//       setRange([value, range[1]]);
//     }
//   };

//   const handleUpperValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && value >= range[0]) {
//       setRange([range[0], value]);
//     }
//   };

//   const isUpperValueChanged = range[1] !== initialUpperValue;

//   return (
//     <div className="w-full md:w-64 space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-bold">Filter</h2>
//         <Button
//           className="text-secondary"
//           onClick={() => setRange([0, initialUpperValue])}
//         >
//           Clear All
//         </Button>
//       </div>

//       <div className="space-y-4">
//         <div className="flex items-center justify-between">
//           <label htmlFor="on-sale" className="text-sm font-normal">
//             On Sales
//           </label>
//           <Switch checked={checked} onCheckedChange={setChecked} id="on-sale" />
//         </div>

//         <div className="flex items-center justify-between">
//           <label htmlFor="new-arrivals" className="text-sm font-normal">
//             New Arrivals
//           </label>
//           <Switch
//             id="new-arrivals"
//             checked={checked2}
//             onCheckedChange={setChecked2}
//           />
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h3 className="font-bold">Price Range</h3>
//         <Slider
//           defaultValue={range}
//           value={range}
//           max={150}
//           step={1}
//           onValueChange={handleRangeChange}
//           className="w-full"
//         />
//         <div className="flex items-center justify-between font-normal">
//           <input
//             type="number"
//             min="0"
//             max={range[1]}
//             value={range[0]}
//             onChange={handleLowerValueChange}
//             className="text-sm w-16 h-8 bg-secondary text-right p-1 rounded"
//           />
//           <span className="text-secondary font-normal">To</span>
//           <input
//             type="number"
//             min={range[0]}
//             value={range[1]}
//             onChange={handleUpperValueChange}
//             className={`text-sm w-16 h-8 text-right p-1 rounded ${isUpperValueChanged ? "bg-accent" : "bg-secondary"
//               }`}
//           />
//         </div>
//       </div>
//       <Accordion type="single" collapsible className="w-full ">
//         <AccordionItem value="dietary">
//           <AccordionTrigger className="font-bold">Dietary Needs</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-2 font-extralight">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="sugar-free" />
//                 <label htmlFor="sugar-free" className="text-sm ">Sugar Free</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="low-fat" />
//                 <label htmlFor="low-fat" className="text-sm  ">Low Fat</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="fat-free" />
//                 <label htmlFor="fat-free" className="text-sm  ">Fat Free</label>
//               </div>
//               <div className="flex items-center space-x-2 ">
//                 <Checkbox id="vegan" />
//                 <label htmlFor="vegan" className="text-sm  ">Vegan</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="Saturated Fat-Free" />
//                 <label htmlFor="Saturated Fat-Free" className="text-sm  ">Saturated Fat-Free</label>
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="Allergence Free">
//           <AccordionTrigger className="font-bold">Allergence Free</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-2  font-extralight">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="sugar-free" />
//                 <label htmlFor="sugar-free" className="text-sm  ">Sugar Free</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="low-fat" />
//                 <label htmlFor="low-fat" className="text-sm  ">Low Fat</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="fat-free" />
//                 <label htmlFor="fat-free" className="text-sm ">Fat Free</label>
//               </div>
//               <div className="flex items-center space-x-2 ">
//                 <Checkbox id="vegan" />
//                 <label htmlFor="vegan" className="text-sm  ">Vegan</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="Saturated Fat-Free" />
//                 <label htmlFor="Saturated Fat-Free" className="text-sm ">Saturated Fat-Free</label>
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="Allergence Free">
//           <AccordionTrigger className="font-bold">Allergence Free</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-2 font-extralight">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="sugar-free" />
//                 <label htmlFor="sugar-free" className="text-sm  ">Sugar Free</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="low-fat" />
//                 <label htmlFor="low-fat" className="text-sm  ">Low Fat</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="fat-free" />
//                 <label htmlFor="fat-free" className="text-sm ">Fat Free</label>
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//     </div>
//   );
// }

// "use client";

// import { Switch } from "@/components/ui/switch";
// import { Slider } from "@/components/ui/slider";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// export default function FilterSidebar() {
//   const initialUpperValue = 150;
//   const [range, setRange] = useState<number[]>([0, initialUpperValue]);
//   const [checked, setChecked] = useState(false);
//   const [checked2, setChecked2] = useState(false);

//   const handleRangeChange = (value: number[]) => {
//     setRange(value);
//   };

//   const handleLowerValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && value >= 0 && value <= range[1]) {
//       setRange([value, range[1]]);
//     }
//   };

//   const handleUpperValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && value >= range[0]) {
//       setRange([range[0], value]);
//     }
//   };

//   const isUpperValueChanged = range[1] !== initialUpperValue;
//   const isSliderChanged = range[0] !== 0 || range[1] !== initialUpperValue;

//   return (
//     <div className="w-full md:w-64 space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-bold">Filter</h2>
//         <Button
//           className="text-secondary"
//           onClick={() => setRange([0, initialUpperValue])}
//         >
//           Clear All
//         </Button>
//       </div>

//       <div className="space-y-4">
//         <div className="flex items-center justify-between">
//           <label htmlFor="on-sale" className="text-sm font-normal">
//             On Sales
//           </label>
//           <Switch checked={checked} onCheckedChange={setChecked} id="on-sale" />
//         </div>

//         <div className="flex items-center justify-between">
//           <label htmlFor="new-arrivals" className="text-sm font-normal">
//             New Arrivals
//           </label>
//           <Switch
//             id="new-arrivals"
//             checked={checked2}
//             onCheckedChange={setChecked2}
//           />
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h3 className="font-bold">Price Range</h3>
//         <Slider
//           defaultValue={range}
//           value={range}
//           max={200}
//           step={1}
//           onValueChange={handleRangeChange}
//           className={`w-full ${
//             isSliderChanged ? "bg-accent" : "bg-secondary"
//           } rounded-full h-2`}
//         />
//         <div className="flex items-center justify-between font-normal">
//           <input
//             type="number"
//             min="0"
//             max={range[1]}
//             value={range[0]}
//             onChange={handleLowerValueChange}
//             className="text-sm w-16 h-8 bg-secondary text-right p-1 rounded"
//           />
//           <span className="text-secondary font-normal">To</span>
//           <input
//             type="number"
//             min={range[0]}
//             value={range[1]}
//             onChange={handleUpperValueChange}
//             className={`text-sm w-16 h-8 text-right p-1 rounded ${
//               isUpperValueChanged ? "bg-accent" : "bg-secondary"
//             }`}
//           />
//         </div>
//       </div>

//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="dietary">
//           <AccordionTrigger className="font-bold">Dietary Needs</AccordionTrigger>
//           <AccordionContent>
//             {/* Dietary Needs checkboxes */}
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }
