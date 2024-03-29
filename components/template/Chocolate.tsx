import React from "react";
import chocolate from "@/lib/data-menu.json";
import Image from "next/image";

interface Menu {
  name: string;
  description: string;
  photo: string;
  price: number;
}

const Chocolate: React.FC = () => {
  const chocolateCategory = chocolate.find(
    (category) => category.category_name === "Chocolate"
  );

  if (!chocolateCategory) {
    return <div>Kategori Chocolate tidak ditemukan.</div>;
  }

  const chocolateMenu: Menu[] = chocolateCategory.menu;

  return (
    <div className="flex flex-col justify-start items-start gap-5">
      <h1 className="font-bold text-xl">Chocolate</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {chocolateMenu.map((menu: Menu) => (
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

export default Chocolate;
