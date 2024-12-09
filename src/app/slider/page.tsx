import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Fruits", icon: "/fruit-1.png" },
  { name: "Vegetables", icon: "/fruits-and-vegetables-1.png" },
  { name: "Meat", icon: "/beef-1.png" },
  { name: "Seafood", icon: "/crab-1.png" },
  { name: "Snacks", icon: "/nachos-1.png" },
  { name: "Beverages", icon: "/soft-drink-1.png" },
  { name: "Frozen", icon: "/frozen-1.png" },
  { name: "Bread & Tortilla", icon: "/bread-1.png" },
  { name: "Household", icon: "/home-1.png" },
];

export default function CategoryNav() {
  return (
    <div className="flex items-center justify-center mx-auto w-full max-w-[1180px] gap-8 overflow-x-auto py-8 px-4 bg-white rounded-lg border-">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/category/${category.name.toLowerCase()}`}
          className="flex flex-col items-center gap-2 min-w-[80px]"
        >
          <Image
            src={category.icon}
            alt={category.name}
            className="w-12 h-12 object-contain"
          />
          <span className="text-sm text-gray-600">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
