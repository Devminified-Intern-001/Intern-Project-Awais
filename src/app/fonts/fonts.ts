import localFont from "next/font/local";

export const basicCommercialSRPro = localFont({
  src: [
    {
      path: "./BasicCommercialSRPro-Light.woff2",
      weight: "100",
      style: "extra-light",
    },
    {
      path: "./BasicCommercialSRPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./BasicCommercialSRPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./BasicCommercialSRPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-basic-commercial",
});

export const poppins = localFont({
  src: [
    {
      path: "./Poppins-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Poppins-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Poppins-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Poppins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});
