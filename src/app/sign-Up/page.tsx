"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";

const signUpSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters long"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden lg:flex w-[583px] relative overflow-hidden">
        <Image
          src="/signup/signup.svg"
          alt="Fresh vegetables"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 lg:p-16 ml-52">
        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-4 w-[363px] h-[45px] top-[284px] left-[771px]  ">
            Sign up to get started.
          </h1>
          <p className="text-sm text-secondary mb-6 w-[363px] h-[31px] top-[329px] left-[771px]">
            ALready a user?{" "}
            <Link href="/sign-In" className="text-accent font-medium">
              Let&apos;s Sign-in
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="text-[#3f4254] text-sm font-medium block mb-2 ms-5"
              >
                User Name
              </label>
              <Input
                id="username"
                type="text"
                className=" rounded-full bg-secondary w-[440px] h-[70px] "
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[#3f4254] text-sm font-medium block mb-2 ms-5"
              >
                Email
              </label>
              <Input
                id="email"
                type="text"
                className=" rounded-full bg-secondary w-[440px] h-[70px] "
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between ">
                <label
                  htmlFor="password"
                  className="text-[#3f4254] text-sm font-medium block mb-2 ms-5"
                >
                  Password
                </label>
              </div>
              <div className="flex justify-between items-center">
                <Input
                  id="password"
                  type="password"
                  className=" rounded-full bg-secondary  w-[440px] h-[70px] "
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-start gap-2 ">
              <Checkbox
                id="terms-checkbox"
                className="border border-secondary rounded-md h-5 w-5 text-background focus:ring-accent checked:bg-accent checked:border-transparent"
                required
              />
              <label
                htmlFor="terms-checkbox"
                className="text-sm text-secondary leading-tight"
              >
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and our default Notification Settings.
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="bg-accent py-2 w-full rounded-full md:w-[183px] h-[61px] top-[676px] left-[771px] radius-[284px] "
              >
                Sign up
              </Button>
              <Button
                variant="outline"
                type="button"
                className="flex items-center w-full justify-center gap-2 border-accent text-accent py-2 rounded-full md:w-[234px] h-[61px] top-[676px] left-[977px]  mr-36"
              >
                <Image
                  src="/signup/google-icon.svg"
                  alt="Google"
                  className="w-[2opx] h-[20px]"
                  width={20}
                  height={20}
                />
                Sign up with Google
              </Button>
            </div>
          </form>

          <div className="flex font-poppins justify-between align-center mt-8 text-sm text-accent w-[325px] h-[31] top-[916px] left-[771px] ">
            <Link href="/terms" className="w-[#FBD54E]">
              Terms & Conditions
            </Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
