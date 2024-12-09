"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";

const SignInSchema = z.object({
  username: z.string().min(5, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignInFormData = z.infer<typeof SignInSchema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden lg:flex w-[583px] relative overflow-hidden bg-background">
        <Image
          src="/signin/signin.svg"
          alt="Fresh vegetables"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 bg-background ml-52">
        <h1 className="text-3xl font-semibold mb-4 w-[363px] h-[45px] top-[284px] left-[771px]  ">
          Welcome to Start.
        </h1>
        <p className="text-sm text-secondary mb-6 w-[363px] h-[31px] top-[329px] left-[771px]">
          New Here?{" "}
          <Link href="/sign-Up" className="text-accent font-medium">
            Create an Account
          </Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-[#3f4254] text-sm font-medium block mb-2 ms-5">
              User Name
            </label>
            <Input
              type="text"
              className="w-[440px] h-[70px] rounded-full bg-secondary "
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <div className="flex  ">
              <label className="text-[#3f4254] text-sm font-medium block mb-2 ms-5">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-accent font-medium ml-56"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-between items-center">
              <Input
                type="password"
                className=" rounded-full bg-secondary w-[440px] h-[70px] "
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col justify-between md:flex-row gap-4 mt-4 ]">
            <Button
              className="bg-accent py-2 w-full rounded-full md:w-[183px] h-[61px] top-[676px] left-[771px] radius-[284px] "
              style={{ boxShadow: "0px 17px 50px 0px #0000001A" }}
            >
              Sign in
            </Button>
            <Button
              variant="outline"
              className="flex items-center w-full justify-center gap-2 border-accent text-accent py-2 rounded-full md:w-[234px] h-[61px] top-[676px] left-[977px] mr-36"
            >
              <Image
                src="/signin/google-icon.svg"
                alt="Google"
                className="w-[2opx] h-[20px] "
              />
              Sign in with Google
            </Button>
          </div>
        </form>

        <div className="flex font-poppins justify-between align-center  mt-8 text-sm text-accent w-[325px] h-[31] top-[916px] left-[771px] ">
          <a href="/terms" className="w-[#FBD54E]">
            Terms & Conditions
          </a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
