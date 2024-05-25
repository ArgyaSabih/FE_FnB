"use client";
import React from "react";
import Link from "next/link";

import {useUser, menuItems} from "@/contexts/UserContext";
import ButtonDetailMenu from "@/components/ButtonDetailMenu";
import ButtonClose from "@/components/ButtonClose";

const DetailMenu = () => {
  const {selectedItem} = useUser();

  if (!selectedItem || typeof selectedItem !== "object") {
    return null;
  }

  const item = menuItems.find((menuItem) => menuItem.id === selectedItem.id);

  if (!item) {
    return null;
  }

  return (
    <div className={"h-screen bg-white overflow-hidden"}>
      <header className="flex pt-4">
        <Link href={"/home"}>
          <ButtonClose />
        </Link>
        <h1 className="pr-6 mx-auto text-2xl font-medium text-center">Detail menu</h1>
      </header>
      <main className="py-2 h-3/4">
        <div className="overflow-hidden bg-white shadow-sm">
          <img src={item.image} alt={item.name} className="object-cover w-full mb-4 rounded-lg h-60" />
          <h2 className="mb-1 text-2xl font-medium">{item.name}</h2>
          <p className="mb-4 text-xl font-semibold">Rp {item.price}</p>
          <hr />
          <p className="mt-1">{item.description}</p>
        </div>
      </main>
      <ButtonDetailMenu />
    </div>
  );
};

export default DetailMenu;
