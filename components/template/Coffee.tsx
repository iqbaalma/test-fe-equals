import React from "react";
import coffee from "@/lib/data-menu.json";
import Image from "next/image";

interface Menu {
  name: string;
  description: string;
  photo: string;
  price: number;
}

const Coffee: React.FC = () => {
  const coffeeCategory = coffee.find(
    (category) => category.category_name === "Coffee"
  );

  if (!coffeeCategory) {
    return <div>Kategori Coffee tidak ditemukan.</div>;
  }

  const coffeeMenu: Menu[] = coffeeCategory.menu;

  return (
    <div className="flex flex-col justify-start items-start gap-5">
      <h1 className="font-bold text-xl">Coffee</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {coffeeMenu.map((menu: Menu) => (
          <div
            key={menu.name}
            className="flex flex-row justify-center items-start gap-5"
          >
            <div className="relative w-full">
              <Image
                src={menu.photo}
                alt={menu.name}
                width={500}
                height={300}
                className=" object-cover bg-no-repeat max-w-20 md:max-w-60"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <h3 className="text-lg font-bold">{menu.name}</h3>
              <p className="text-sm md:line-clamp-none line-clamp-3">{menu.description}</p>
            </div>
            <div>
              <p className="text-lg font-bold">Price: {menu.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
