"use client";
import Image from "next/image";
import Logo from "@/public/logo-technopartner.png";
import { Button } from "@/components/ui/button";
import QR from "@/public/qr.png";
import { useState } from "react";
import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import NavbarBottom from "@/components/ui/navbarBottom";

export default function Home() {
  const [visibleQr, setVisibleQr] = useState(false);

  const showQr = () => {
    setVisibleQr(!visibleQr);
  };
  return (
    <main className="container max-w-lg flex min-h-screen flex-col items-center justify-start">
      <div className="sticky top-0 py-3 px-5 flex flex-row justify-start items-center w-full bg-white z-30">
        <Image width={180} src={Logo} alt="Technopartner Indonesia" />
      </div>
      <div className="pattern py-5 w-full px-5">
        <div className="p-5 flex flex-col justify-enter items-start gap-1 bg-white drop-shadow-md">
          <h1>Good Afternoon,</h1>
          <h1 className="font-bold">M Iqbal Maulana</h1>
          <div className="flex flex-row justify-between items-center w-full mt-2">
            <Button
              onClick={showQr}
              size="icon"
              variant="outline"
              className="p-1 h-20 w-20 rounded-full"
            >
              <Image width={50} src={QR} alt="QR CODE" />
            </Button>
            <span className="w-[0.5px] h-10 bg-black/30"></span>
            <div className="flex flex-col justify-center items-center w-60 h-20 gap-1 font-bold">
              <span className="w-full flex flex-row justify-between items-center">
                <p>Saldo</p>
                <p>Rp.279.000</p>
              </span>
              <span className="w-full flex flex-row justify-between items-center">
                <p>Points</p>
                <p className="text-green-500">2.500</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {visibleQr && (
        <div className="absolute left-50 top-0 container max-w-lg min-h-screen bg-white z-50 flex flex-col justify-center items-center">
          <Button
            className="text-black mt-4 rounded-full absolute top-3 right-5"
            onClick={showQr}
            size="icon"
            variant="outline"
          >
            <X />
          </Button>
          <div className="spacing-y-3 text-center">
            <p>Show the QR Code below to the cashier</p>
            <Image width={300} src={QR} alt="QR CODE" />
          </div>
        </div>
      )}
      <Slider />
      <NavbarBottom />
    </main>
  );
}
