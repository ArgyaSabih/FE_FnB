"use client";
import React from "react";
import Link from "next/link";
import {useUser} from "@/contexts/UserContext";
import ButtonIncrementDecrement from "@/components/ButtonIncrementDecrement";
import ButtonClose from "@/components/ButtonClose";

const Checkout = () => {
  const {totalOrder, totalPrice, formatPrice, dataPesanan, handleTotalOrderChange} = useUser();

  return (
    <div className="h-screen overflow-hidden bg-white">
      <header className="flex my-4">
        <Link href={"/home"}>
          <ButtonClose />
        </Link>
        <div className="pr-6 mx-auto text-xl font-semibold text-center">Order List</div>
      </header>
      <div className="flex justify-end">{totalOrder} items selected</div>
      <ul className="max-h-[55%] overflow-x-auto">
        {dataPesanan?.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-between p-2.5 m-2 bg-gray-100 rounded-lg border-[1px] border-gray-400 bg-opacity-60"
            >
              <div>
                <p className="leading-8">{item.name}</p>
                <p className="leading-4">Rp {item.price}</p>
              </div>
              <ButtonIncrementDecrement
                totalItem={item?.amount}
                setTotalItem={(amt) => {
                  const incr = amt - item.amount;
                  handleTotalOrderChange({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    update: incr
                  });
                }}
              />
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between mx-2 my-4">
        <div>Subtotal</div>
        <div className="font-semibold">Rp {formatPrice(totalPrice)}</div>
      </div>
      <div className="w-4/5 mx-auto text-xs italic text-center opacity-70">
        By clicking order, you confirm that you're 18+ and you agree to the term and condition
      </div>
      <Link href={"/payment"}>
        <button className="absolute justify-center w-11/12 p-4 px-4 text-sm font-semibold text-center text-white bg-black rounded-full bottom-3">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
