"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LandingHero = () => {
  const router = useRouter();
  return (
    <section className="relative h-screen bg-[url('/landing/lady.svg')] bg-cover bg-center py-6 px-16 overflow-hidden">
      <div className="container mx-8 flex flex-col gap-4 sm:flex-row justify-between items-center">
        <Link
          href="/"
          className="text-2xl flex items-center justify-center text-center font-poppins font-medium bg-secondary h-14 w-32 p-4 rounded ms-8"
        >
          Logo
        </Link>

        <div className="flex items-baseline space-x-4 me-8">
          <Button
            variant="link"
            onClick={() => router.push("/sign-In")}
            className="text-black font-bold text-"
          >
            Sign In
          </Button>

          {/* <Link
            href="/sign-In"
            className="text-black font-bold text-"
          >
            Sign In
          </Link> */}

          <Button
            onClick={() => router.push("/sign-Up")}
            className="px-9 bg-accent rounded-3xl hover:bg-hover py-6 font-bold"
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/landing/halfcircle.svg"
          className="absolute left-0"
          height={100}
          width={100}
          alt="halfCircle"
        />
      </div>
      <div className="container text-center lg:text-left ms-8 mt-16">
        <div className="max-w-2xl space-y-10 mx-8 pt-20 pb-12 px-8 lg:mx-0">
          <h1 className="text-6xl font-bold font-plantin leading-snug">
            We Always Provide <br /> Best Products
          </h1>
          <p className="mt-6 text-xl font-light text-grey pe-32">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
          <Button
            onClick={() => router.push("/home-Page")}
            className="mt-6 px-9 h-16 w-52 bg-accent shadow-lg rounded-full text-lg hover:bg-hover py-6 text-black font-bold"
          >
            Get Started
          </Button>
        </div>
        <div className="p-5 text-center absolute top-48 right-40 shadow-lg card w-[149px] h-[167px] bg-white rounded-2xl">
          <div className="m-auto w-12 h-12 bg-accent/20 flex items-center justify-center rounded-xl ">
            <Image
              src="/landing/headphone.svg"
              alt="headphone"
              height={24}
              width={24}
            />
          </div>
          <p className="text-sm text-supportHeading font-bold mt-3">
            24hr Support
          </p>
          <p className="text-supportText/60 text-[9px] mt-3">
            Lorem ipsum is a dummy text for long
          </p>
        </div>
        <div className="bg-white absolute bottom-[78px] right-[530px] rounded-3xl shadow-lg p-4 flex items-center space-x-4 w-[236px]">
          <div className="flex-shrink-0">
            <Image
              src="/landing/girlicon.svg"
              alt="cooperIcon"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="h-2 bg-secondary/45 rounded w-11/12 mb-2"></div>
            <div className="h-2 bg-secondary/45 rounded w-8/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
