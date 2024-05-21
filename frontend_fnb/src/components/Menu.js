"use client";
import React from "react";
import Link from "next/link";
import TotalOrder from "./TotalOrder";

import {useUser, menuItems} from "../contexts/UserContext";

const Menu = () => {
  const {handleClickItem, totalOrder} = useUser();

  return (
    <section className="pb-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item) => (
            <div key={item.id} className="p-4 rounded-lg shadow-xl bg-slate-50 ">
              <img src={item.image} alt={item.name} className="object-cover w-full h-40 mb-4 rounded-lg" />
              <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.ingredients}</p>
              <div className="flex place-content-between">
                <p className="mt-2 font-bold">Rp {item.price}</p>
                <Link href={"/detail-menu"}>
                  <button
                    className="pt-1.5"
                    onClick={() => {
                      handleClickItem(item);
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="11.5" fill="#EEEEEE" stroke="#E8E8E8" />
                      <path
                        d="M16.6875 12C16.6875 12.1492 16.6282 12.2923 16.5227 12.3977C16.4173 12.5032 16.2742 12.5625 16.125 12.5625H12.5625V16.125C12.5625 16.2742 12.5032 16.4173 12.3977 16.5227C12.2923 16.6282 12.1492 16.6875 12 16.6875C11.8508 16.6875 11.7077 16.6282 11.6023 16.5227C11.4968 16.4173 11.4375 16.2742 11.4375 16.125V12.5625H7.875C7.72582 12.5625 7.58274 12.5032 7.47725 12.3977C7.37176 12.2923 7.3125 12.1492 7.3125 12C7.3125 11.8508 7.37176 11.7077 7.47725 11.6023C7.58274 11.4968 7.72582 11.4375 7.875 11.4375H11.4375V7.875C11.4375 7.72582 11.4968 7.58274 11.6023 7.47725C11.7077 7.37176 11.8508 7.3125 12 7.3125C12.1492 7.3125 12.2923 7.37176 12.3977 7.47725C12.5032 7.58274 12.5625 7.72582 12.5625 7.875V11.4375H16.125C16.2742 11.4375 16.4173 11.4968 16.5227 11.6023C16.6282 11.7077 16.6875 11.8508 16.6875 12Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {totalOrder > 0 && <TotalOrder />}
      </div>
    </section>
  );
};

export default Menu;
