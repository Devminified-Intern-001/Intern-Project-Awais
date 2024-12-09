import Image from "next/image";

const logos = [
  { name: "Coca Cola", src: "/cocacola.svg" },
  { name: "Chilli Beans", src: "/chilli-beans.svg" },
  { name: "Nestle", src: "/nestle.svg" },
  { name: "Pizza Hut", src: "/pizzahut.svg" },
];

export default function BrandLogo() {
  return (
    <section className="w-full bg-accent/25 py-16 ">
      <div className="container mx-auto max-w-7xl ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="w-full max-w-[200px]">
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={100}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
