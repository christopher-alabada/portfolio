import { Lato, Open_Sans } from "next/font/google";

export const lato = Lato({
  weight: ["300"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const openSans = Open_Sans({
  weight: ["300", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-open-sans",
});
