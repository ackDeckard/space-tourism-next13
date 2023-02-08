"use client";
import "./globals.css";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { Bellefair, Barlow_Condensed, Barlow } from "@next/font/google";
import React from "react";
import Spacer from "./Spacer";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bellefair",
});
const barlowCond = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--barlowCondensed",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--barlow",
});

export default function RootLayout({ children }) {
  let changeBgImage;
  const pathname = usePathname();

  if (pathname === "/") {
    changeBgImage = "bg-mobile md:bg-tablet xl:bg-desktop";
  } else if (pathname === "/destination") {
    changeBgImage =
      "bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop ";
  } else if (pathname === "/crew") {
    changeBgImage = "bg-crewMobile md:bg-crewTablet xl:bg-crewDesktop ";
  } else if (pathname === "/technology") {
    changeBgImage = "bg-techMobile md:bg-techTablet xl:bg-techDesktop";
  }

  return (
    <html lang="en">
      <head />
      <body
        className={`flex h-screen flex-col bg-mobile bg-cover ${changeBgImage} ${bellefair.variable} ${barlowCond.variable} ${barlow.variable}`}
      >
        <Header />
        {pathname === "/" && <Spacer height={"251"} />}
        {children}
      </body>
    </html>
  );
}
