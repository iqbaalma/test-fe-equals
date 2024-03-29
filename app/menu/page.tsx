"use client";
import NavbarBottom from "@/components/ui/navbarBottom";
import React from "react";

export default function Menu() {
  const categoryMenu = [
    {
      id: 1,
      name: "Seasonal Product",
      link: "/seasonal",
    },
    {
      id: 2,
      name: "Best Seller",
      link: "/best",
    },
    {
      id: 3,
      name: "Coffee",
      link: "/seasonal",
    },
    {
      id: 4,
      name: "Cold Brew",
      link: "/coldbrew",
    },
    {
      id: 5,
      name: "Chocolate",
      link: "/chocolate",
    },
  ];
  return (
    <main className="container max-w-lg flex min-h-screen flex-col items-center justify-start">
      <div className="sticky top-0 py-3 px-5 flex flex-row justify-center items-center w-full bg-white z-30">
        <p className="font-bold">MENU</p>
      </div>
      <div className="flex flex-row p-0 m-0">

      </div>
      <NavbarBottom />
    </main>
  );
}
