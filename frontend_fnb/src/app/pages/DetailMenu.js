import React from "react";
import {menuItems} from "../page";
import ButtonDetailMenu from "../components/ButtonDetailMenu";

import {useNavigate} from "react-router-dom";

export default function DetailMenu({
  selectedItem,
  totalItem,
  onClose,
  onTotalOrderChange,
  onClickAddToCart,
  opacity,
  text,
  disabled
}) {
  const navigate = useNavigate();

  if (!selectedItem || typeof selectedItem !== "object") {
    return null;
  }

  const item = menuItems.find((menuItem) => menuItem.id === selectedItem.id);

  if (!item) {
    return null;
  }

  return (
    <div className={"h-screen bg-white"}>
      <header className="flex pt-8">
        <button
          onClick={() => {
            navigate("/");
            onClose();
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19M5 12L9 16M5 12L9 8"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
      <ButtonDetailMenu
        onTotalOrderChange={onTotalOrderChange}
        totalItem={totalItem}
        onClickAddToCart={onClickAddToCart}
        opacity={opacity}
        text={text}
        disabled={disabled}
      />
    </div>
  );
}
