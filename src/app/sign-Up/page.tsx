import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="hidden w-full lg:flex md:w-1/2 items-center justify-center bg-background">
          <img
            src="/Group189.png"
            alt="Fresh vegetables"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 bg-background">
          <h1 className="text-3xl font-semibold mb-4 w-[363px] h-[45px] top-[284px] left-[771px]  ">
            Sign up to get started.
          </h1>
          <p className="text-sm text-secondary mb-6 w-[363px] h-[31px] top-[329px] left-[771px]">
            ALready a user?{" "}
            <a href="/create-account" className="text-accent font-medium">
              Let&apos;s Sign-in
            </a>
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-[#3f4254] text-sm font-medium block mb-2 ms-5">
                User Name
              </label>
              <Input
                type="text"
                className="w-full rounded-full bg-secondary "
              />
            </div>

            <div>
              <label className="text-[#3f4254] text-sm font-medium block mb-2 ms-5">
                Email
              </label>
              <Input
                type="text"
                className="w-full rounded-full bg-secondary "
              />
            </div>

            <div>
              <div className="flex justify-between ">
                <label className="text-[#3f4254] text-sm font-medium block mb-2 ms-5">
                  Password
                </label>
                {/* <a
                href="/forgot-password"
                className="text-sm text-accent font-medium ml-2"
              >
                Forgot Password?
              </a> */}
              </div>
              <div className="flex justify-between items-center">
                <Input
                  type="password"
                  className=" rounded-full bg-secondary w-full"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 mt-4">
              <Checkbox
                id="terms-checkbox"
                className="border border-secondary rounded-md h-5 w-5 text-background focus:ring-accent checked:bg-accent checked:border-transparent"
              />
              <label
                htmlFor="terms-checkbox"
                className="text-sm text-secondary leading-tight"
              >
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and our default Notification Settings.
              </label>
            </div>

            <div className="flex flex-col justify-between md:flex-row gap-4 mt-4 ]">
              <Button
                className="bg-accent py-2 w-full rounded-full md:w-[183px] h-[61px] top-[676px] left-[771px] radius-[284px] "
                style={{ boxShadow: "0px 17px 50px 0px #0000001A" }}
              >
                Sign up
              </Button>
              <Button
                variant="outline"
                className="flex items-center w-full justify-center gap-2 border-accent text-accent py-2 rounded-full md:w-[234px] h-[61px] top-[676px] left-[977px] "
              >
                <img
                  src="/google.png"
                  alt="Google"
                  className="w-[2opx] h-[20px]"
                />
                Sign up with Google
              </Button>
            </div>
          </form>

          <div className="flex font-poppins justify-between align-center mt-40 text-sm text-accent w-[325px] h-[31] top-[916px] left-[771px] ">
            <a href="/terms" className="w-[#FBD54E]">
              Terms & Conditions
            </a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
