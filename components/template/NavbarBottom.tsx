"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeIcon from "@/public/home1.png";
import HomeIconNone from "@/public/home2.png";
import MenuIcon from "@/public/menu1.png";
import MenuIconNone from "@/public/menu2.png";
import { usePathname } from "next/navigation";

export default function NavbarBottom() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bottom-0 py-3 pb-5 px-5 flex flex-row justify-evenly items-center z-30 bg-white">
      <Link
        href="/home"
        className="text-center flex flex-col items-center justify-center gap-1"
      >
        <Image
          width={30}
          src={pathname === "/home" ? HomeIcon : HomeIconNone}
          alt="home-icon"
        />
        <p
          className={`text-xs font-medium ${
            pathname === "/home" ? "text-black" : "opacity-50"
          }`}
        >
          Home
        </p>
      </Link>
      <Link
        href="/menu"
        className="text-center flex flex-col items-center justify-center gap-1"
      >
        <Image
          width={30}
          src={pathname === "/menu" ? MenuIcon : MenuIconNone}
          alt="menu-icon"
        />
        <p
          className={`text-xs font-medium ${
            pathname === "/menu" ? "text-black" : "opacity-50"
          }`}
        >
          Menu
        </p>
      </Link>
    </nav>
  );
}
