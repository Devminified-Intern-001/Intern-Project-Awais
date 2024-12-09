import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Leaf,
  ShoppingCart,
  MapPin,
  Star,
  Heart,
} from "lucide-react";
import Footer from "@/components/footer";
import LandingHero from "@/components/landing-Hero";
import Image from "next/image";

export default function LandingPage() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-black" />,
      title: "Fill the form at the begining.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-accent/30",
    },
    {
      icon: <Leaf className="w-6 h-6 text-black" />,
      title: "Select the products you want.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-accent/30",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-black" />,
      title: "Add products to the cart.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-accent/30",
    },
    {
      icon: <MapPin className="w-6 h-6 text-black" />,
      title: "Get delivered to your door step.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-accent/30",
    },
  ];

  const stats = [
    {
      number: "850",
      title: "Professionals Team",
      description: "Highly Verified",
    },
    {
      number: "1500+",
      title: "Happy Customers",
      description: "Got their treatments",
    },
    {
      number: "95.8%",
      title: "Positive Feedback",
      description: "From our customers",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      <LandingHero />

      <div className="w-full bg-background py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto mb-32 text-center">
          <Badge
            variant="secondary"
            className="bg-secondary/30 my-8 place-content-center hover:bg-secondary/30 font-montserrat text-sm font-medium h-11 w-36 px-4 py-2 rounded-3xl "
          >
            Services
          </Badge>

          <h2 className="text-3xl md:text-5xl text-[#333535] font-bold text-center mb-4">
            Easy steps to get your product
          </h2>

          <p className="text-gray-500 text-xl font-light max-w-lg text-center mb-16 mx-auto">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group flex flex-col bg-transparent border-none shadow-none md:border rounded-3xl h-[300px] w-64 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div
                  className={`${step.bgColor} group-hover:bg-accent transition-all duration-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  {step.icon}
                </div>
                <h3 className="font-bold text-left mb-4 leading-6">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-left leading-6 font-light">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-secondary/30 mb-4 place-content-center place-self-start hover:bg-secondary/30 font-montserrat text-sm font-medium h-11 w-36 px-4 py-2 rounded-3xl"
              >
                Products
              </Badge>

              <h2 className="text-5xl md:text-4xl font-semibold">
                We are offering specialist certified products.
              </h2>

              <p className="text-gray-500 font-light max-w-md text-sm leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image src="/landing/checkIcon.svg" alt="Check Icon" />
                  <span className="text-[#8c8c8c] font-light">
                    You can find the product easily.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/landing/checkIcon.svg" alt="Check Icon" />
                  <span className="text-[#8c8c8c] font-light">
                    Latest and healthy products.
                  </span>
                </div>
              </div>

              <Button className="bg-accent text-black hover:bg-accent/90 font-bold mt-4 h-16 w-56 text-[16px] rounded-full shadow-xl">
                See products
                <span className="ml-2">→</span>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/landing/ladyDoctor.svg"
                alt="Doctor with certification"
                className="w-full rounded-lg"
              />

              {/* Certification Card */}
              <Card className="absolute bottom-4 left-4 bg-background p-6 rounded-2xl shadow-lg max-w-[250px]">
                <div className="absolute flex items-center justify-center h-14 w-14 bg-background/95 shadow-lg rounded-2xl -right-8 -top-6">
                  <div className="flex items-center justify-center h-6 w-6 bg-accent rounded-full">
                    <Image
                      src="/landing/tick.svg"
                      className="h-3 w-3"
                      alt="tick"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="font-bold text-sm">
                      Product verified by
                    </span>
                    <br />
                    <span className="text-xs text-grey font-light">
                      Selected specialists
                    </span>
                  </div>
                  <div className="flex gap-1 self-start mt-3">
                    <div className="h-1 w-1 rounded-full bg-secondary"></div>
                    <div className="h-1 w-1 rounded-full bg-secondary"></div>
                    <div className="h-1 w-1 rounded-full bg-secondary"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/landing/icon1.svg"
                      alt="landing Icon1"
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    />
                    <div>
                      <p className="text-sm text-black/60 font-bold">
                        Dr. James Jones
                      </p>
                      <div className="flex items-center gap-2">
                        <span>
                          <Image
                            src="/landing/sheild.svg"
                            className="w-3 h-3"
                            alt="sheild"
                          />
                        </span>
                        <p className="text-xs text-dimGrey/60 font-poppins font-medium">
                          Specialist
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/landing/icon2.svg"
                      alt="landing icon2"
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    />
                    <div>
                      <p className="text-sm text-primary/60 font-bold">
                        Dr. Lauren Alexandra
                      </p>
                      <div className="flex items-center gap-2">
                        <span>
                          <Image
                            src="/landing/sheild.svg"
                            className="w-3 h-3"
                            alt="sheild"
                          />
                        </span>
                        <p className="text-xs text-dimGrey/60 font-poppins font-medium">
                          Specialist
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="default"
                  className="bg-accent/45 rounded-xl hover:bg-accent text-darkGrey w-full mt-5 text-sm"
                >
                  See more
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-background py-16 px-4 md:px-6">
        {/* Feedback Section */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/landing/leftLady.svg"
                alt="Customer with groceries"
                className="w-full rounded-lg"
              />

              {/* Review Card */}
              <Card className="absolute bottom-24 left-24 bg-background/90 p-6 rounded-xl shadow-lg max-w-[340px] h-[184px]">
                <div className="flex items-center gap-5 mb-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/landing/anna.svg"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid place-content-center place-items-start">
                    <h4 className="font-semibold">Anna Marie</h4>
                    <p className="text-sm text-gray-500">Since 2021</p>
                    <div className="flex place-self-start gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-grey font-DMSans font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </p>

                <div className="absolute  bottom-56 left-56  bg-white p-3 rounded-xl shadow-lg z-20">
                  <div className="absolute -top-3 -right-3 bg-[#FBD54E] p-2 rounded-xl">
                    <Heart className="w-4 h-4 text-black" fill="#000000" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src="/landing/man.svg"
                        alt="Review avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-cente gap-1">
                      <div className="w-[126px] h-2 rounded-[9px] bg-gray-200 " />
                      <div className="w-[91px] h-2 rounded-[9px] bg-gray-200 " />
                    </div>
                  </div>
                </div>

                {/* Quote icon */}
                <div className="absolute -top-[-19px] -right-[-10px] p-2 rounded-lg">
                  <Image src="/landing/quotes.svg" alt="quotesIcon" />
                </div>
              </Card>
            </div>

            <div className="grid space-y-6">
              <Badge
                variant="secondary"
                className="bg-secondary/30 mb-4 place-content-center place-self-end hover:bg-secondary/30 font-montserrat text-sm font-medium h-11 w-36 px-4 py-2 rounded-3xl"
              >
                Feedbacks
              </Badge>

              <h2 className="text-5xl max-w-[455px] place-self-end text-right md:text-4xl font-lato font-semibold">
                Read the best reviews from our users
              </h2>

              <p className="text-grey/80 max-w-md ms-auto text-sm text-right leading-7 font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>

              <Button className="bg-accent place-self-end text-black font-bold hover:bg-accent/90 mt-4 h-16 w-56 text-[16px] rounded-full shadow-xl">
                See more
                <span className="ml-2">
                  <Image src="/landing/rarr.svg" alt="rightArrow" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="bg-secondary/30 mb-4 place-content-center place-self-end hover:bg-secondary/30 font-montserrat text-sm font-medium h-11 w-36 px-4 py-2 rounded-3xl"
          >
            Services
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our long journey
          </h2>

          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-accent/20 h-44 w-80 rounded-3xl p-8 text-center transition-shadow duration-300"
              >
                <h3 className="text-4xl font-bold mb-3">{stat.number}</h3>
                <p className="font-semibold mb-2">{stat.title}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
        <div className="relative w-full max-w-[1087px] h-[344px] rounded-[43px] overflow-hidden ">
          <Image
            src="/landing/newssection.png"
            alt="Newsletter"
            className="w-full h-full object-cover "
          />
          <div className="absolute bg-primary/10 inset-0"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 text-center z-10">
            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl mb-5 ">
              Sign Up For Our News Letter
            </h2>

            <div className="flex items-center mx-auto max-w-[600px] space-x-2">
              <div className="relative w-[347px]">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <Image
                    src="/landing/envelope.svg"
                    alt="Envelope Icon"
                    className="w-5 h-5"
                  />
                </span>

                <input
                  className="w-full h-16 bg-background text-gray-900 rounded-full px-12 py-3 border border-gray-300 focus:outline-none"
                  placeholder="Put your email address here..."
                  type="email"
                />
              </div>

              <button className="bg-accent text-black font-bold px-6 py-3 shadow-sm text-lg rounded-full w-44 h-16">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
