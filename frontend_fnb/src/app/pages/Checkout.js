import React from "react";
import {menuItems} from "../routes";
import ButtonIncrementDecrement from "../components/ButtonIncrementDecrement";

export default function Checkout({totalPrice, totalOrder, totalItem}) {
  function formatPrice(totalPrice) {
    let priceString = totalPrice.toString();
    if (priceString.includes(".")) {
      const [integerPart, decimalPart] = priceString.split(".");
      if (decimalPart.length < 3) {
        const zerosToAdd = 3 - decimalPart.length;
        const newDecimalPart = decimalPart + "0".repeat(zerosToAdd);
        return `${integerPart}.${newDecimalPart}`;
      } else {
        return priceString;
      }
    } else {
      return `${priceString}.000`;
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-white">
      <header className="flex justify-between my-3">
        <div className="text-lg font-semibold">Order List</div>
        <div>{totalOrder} items selected</div>
      </header>
      <ul className="max-h-[55%] overflow-x-auto">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between p-2.5 m-2 bg-gray-100 rounded-lg border-[1px] border-gray-400 bg-opacity-60"
          >
            <div>
              <p className="leading-8">{item.name}</p>
              <p className="leading-4">Rp {item.price}</p>
            </div>
            <ButtonIncrementDecrement />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mx-2 my-4">
        <div>Subtotal</div>
        <div className="font-semibold">Rp {formatPrice(totalPrice)}</div>
      </div>
      <div className="w-4/5 mx-auto text-xs italic text-center opacity-70">
        By clicking order, you confirm that you're 18+ and you agree to the term and condition
      </div>
      <button className="absolute justify-center w-11/12 p-4 px-4 text-sm font-semibold text-center text-white bg-black rounded-full bottom-3">
        Order Now
      </button>
    </div>
  );
}
