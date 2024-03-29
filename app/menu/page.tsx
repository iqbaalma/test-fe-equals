import NavbarBottom from "@/components/template/NavbarBottom";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import BestSeller from "@/components/template/BestSeller";
import Seasonal from "@/components/template/Seasonal";
import Coffee from "@/components/template/Coffee";
import ColdBrew from "@/components/template/ColdBrew";
import Chocolate from "@/components/template/Chocolate";

export default function Menu() {
  const categoryMenu = [
    {
      id: "1",
      name: "Seasonal Product",
      link: "/menu/seasonal",
    },
    {
      id: "2",
      name: "Best Seller",
      link: "/menu/best",
    },
    {
      id: "3",
      name: "Coffee",
      link: "/menu/seasonal",
    },
    {
      id: "4",
      name: "Cold Brew",
      link: "/menu/coldbrew",
    },
    {
      id: "5",
      name: "Chocolate",
      link: "/menu/chocolate",
    },
  ];

  return (
    <>
      <Tabs defaultValue="1">
        <div className="sticky top-0 py-3 px-5 flex flex-row justify-center items-center w-full bg-white z-30">
          <p className="font-bold">MENU</p>
        </div>
        <main className="w-full flex min-h-screen flex-col items-center justify-start overflow-hidden">
          <ScrollArea className="w-full px-5 whitespace-nowrap">
            <TabsList className="flex space-x-0 w-max bg-transparent bg-white">
              {categoryMenu.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="1" className="w-full px-5 mb-28">
            <Seasonal />
          </TabsContent>
          <TabsContent value="2" className="w-full px-5 mb-28">
            <BestSeller />
          </TabsContent>
          <TabsContent value="3" className="w-full px-5 mb-28">
            <Coffee />
          </TabsContent>
          <TabsContent value="4" className="w-full px-5 mb-28">
            <ColdBrew />
          </TabsContent>
          <TabsContent value="5" className="w-full px-5 mb-28">
            <Chocolate />
          </TabsContent>

          <NavbarBottom />
        </main>
      </Tabs>
    </>
  );
}
