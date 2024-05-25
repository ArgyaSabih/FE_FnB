"use client";
import React from "react";
import Link from "next/link";

// Fokus bikin komponen-komponen utamanya dulu. localhost/payment return 404
import {useUser} from "@/contexts/UserContext";
import ButtonClose from "@/components/ButtonClose";

export default function PaymentPage() {
  const {totalPrice, formatPrice, dataPesanan} = useUser();

  return (
    <div className="h-screen mx-2 overflow-x-auto">
      <div className="flex mt-4">
        <Link href={"/checkout"}>
          <ButtonClose />
        </Link>
        <div className="container flex flex-col items-center mb-3">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28 5.25C23.5005 5.25 19.102 6.58426 15.3608 9.08407C11.6196 11.5839 8.70364 15.1369 6.98175 19.294C5.25986 23.451 4.80933 28.0252 5.68715 32.4383C6.56496 36.8514 8.73169 40.905 11.9133 44.0867C15.095 47.2683 19.1486 49.4351 23.5617 50.3129C27.9748 51.1907 32.549 50.7402 36.7061 49.0183C40.8631 47.2964 44.4161 44.3804 46.9159 40.6392C49.4157 36.898 50.75 32.4995 50.75 28C50.7436 21.9683 48.3447 16.1854 44.0797 11.9204C39.8146 7.65528 34.0317 5.25637 28 5.25ZM28 47.25C24.1927 47.25 20.4709 46.121 17.3053 44.0058C14.1396 41.8906 11.6723 38.8841 10.2153 35.3667C8.75834 31.8492 8.37713 27.9786 9.11989 24.2445C9.86266 20.5104 11.696 17.0804 14.3882 14.3882C17.0804 11.696 20.5104 9.86265 24.2445 9.11988C27.9787 8.37712 31.8492 8.75833 35.3667 10.2153C38.8841 11.6723 41.8906 14.1396 44.0058 17.3053C46.121 20.4709 47.25 24.1927 47.25 28C47.2442 33.1036 45.2142 37.9966 41.6054 41.6054C37.9966 45.2142 33.1037 47.2442 28 47.25ZM42 28C42 28.4641 41.8156 28.9093 41.4874 29.2374C41.1593 29.5656 40.7141 29.75 40.25 29.75H28C27.5359 29.75 27.0908 29.5656 26.7626 29.2374C26.4344 28.9093 26.25 28.4641 26.25 28V15.75C26.25 15.2859 26.4344 14.8408 26.7626 14.5126C27.0908 14.1844 27.5359 14 28 14C28.4641 14 28.9093 14.1844 29.2374 14.5126C29.5656 14.8408 29.75 15.2859 29.75 15.75V26.25H40.25C40.7141 26.25 41.1593 26.4344 41.4874 26.7626C41.8156 27.0908 42 27.5359 42 28Z"
              fill="#DEA027"
            />
          </svg>
          <div className="flex justify-center mt-2 text-xs font-semibold">Waiting for payment</div>
        </div>
      </div>
      <div className="my-5">
        <div className="mx-15 max-h-[30] rounded-2xl border-solid border-[1px] border-[#e8e8e8] bg-white">
          <div className="px-5 pt-6 pb-9">
            <h2 className="flex pb-5 text-sm font-semibold">Payment Step</h2>
            <div className="ml-4">
              <ul className="list-decimal-none">
                {" "}
                {/* Gimana caranya bikin lingkaran dg angka di dalam??? */}
                <li className=" text-xs text-[#666666] flex">
                  <img src="img/number1.svg" className="mr-4" />
                  Lorem ipsum dolor sit amet consectetur. Nulla non commodo vitae sagittis diam pretium.{" "}
                </li>{" "}
                <li className="py-4 text-xs text-[#666666] flex">
                  <img src="img/number2.svg" className="mr-4" />
                  Eget quis neque turpis quis hendrerit. Proin cras iaculis et urna lacus eget.{" "}
                </li>{" "}
                <li className="text-xs text-[#666666] flex">
                  <img src="img/number3.svg" className="mr-4" />
                  Varius turpis scelerisque viverra aliquet lectus eros.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-2xl border-[1px] border-solid border-[#e8e8e8] bg-white">
          <div className="p-5">
            <h2 className="flex pt-1 pb-2 text-sm font-semibold">Ordered</h2>
            <ul>
              {dataPesanan?.map((item) => (
                <li key={item.id} className="flex justify-between pt-3 text-xs">
                  <span className="flex font-medium">{item.name}</span>
                  <div className="flex justify-end mr-6">
                    <span className="flex mr-4 text-[10px] text-[#999999]">x{item.amount}</span>
                    <span className="flex font-semibold">Rp {item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between pt-5 mr-6 font-bold">
              <span className="text-xs">Total Payment</span>
              <span className="text-sm">Rp {formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>
      </div>
      <Link href={"/completed"}>
        <button className="fixed justify-center w-11/12 p-4 ml-4 text-sm font-semibold text-center text-white bg-black rounded-full bottom-3">
          Done
        </button>
      </Link>
      <div className="p-7"></div>
    </div>
  );
}
