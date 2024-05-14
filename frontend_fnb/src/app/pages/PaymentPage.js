import React from "react";

// Fokus bikin komponen-komponen utamanya dulu. localhost/payment return 404
import { cartItems } from "../routes";

export default function PaymentPage() {
  function totalPrice(price, amount) {}

  return (
    <section className="container bg-gradient-to-b from-[#eeeeee] to-white">
      <div className="">
        <div className="pt-8 mb-3 container flex justify-center">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 0.25C18.5005 0.25 14.102 1.58426 10.3608 4.08407C6.61957 6.58387 3.70364 10.1369 1.98175 14.294C0.259857 18.451 -0.190669 23.0252 0.687145 27.4383C1.56496 31.8514 3.73169 35.905 6.91333 39.0867C10.095 42.2683 14.1486 44.4351 18.5617 45.3129C22.9748 46.1907 27.549 45.7402 31.7061 44.0183C35.8631 42.2964 39.4161 39.3804 41.9159 35.6392C44.4157 31.898 45.75 27.4995 45.75 23C45.7436 16.9683 43.3447 11.1854 39.0797 6.92036C34.8146 2.65528 29.0317 0.25637 23 0.25ZM23 42.25C19.1927 42.25 15.4709 41.121 12.3053 39.0058C9.13964 36.8906 6.67232 33.8841 5.21533 30.3667C3.75834 26.8492 3.37713 22.9786 4.11989 19.2445C4.86266 15.5104 6.69604 12.0804 9.3882 9.3882C12.0804 6.69603 15.5104 4.86265 19.2445 4.11988C22.9787 3.37712 26.8492 3.75833 30.3667 5.21532C33.8841 6.67231 36.8906 9.13963 39.0058 12.3053C41.121 15.4709 42.25 19.1927 42.25 23C42.2442 28.1036 40.2142 32.9966 36.6054 36.6054C32.9966 40.2142 28.1037 42.2442 23 42.25ZM37 23C37 23.4641 36.8156 23.9093 36.4874 24.2374C36.1593 24.5656 35.7141 24.75 35.25 24.75H23C22.5359 24.75 22.0908 24.5656 21.7626 24.2374C21.4344 23.9093 21.25 23.4641 21.25 23V10.75C21.25 10.2859 21.4344 9.84075 21.7626 9.51256C22.0908 9.18437 22.5359 9 23 9C23.4641 9 23.9093 9.18437 24.2374 9.51256C24.5656 9.84075 24.75 10.2859 24.75 10.75V21.25H35.25C35.7141 21.25 36.1593 21.4344 36.4874 21.7626C36.8156 22.0908 37 22.5359 37 23Z"
              fill="#DEA027"
            />
          </svg>
        </div>
        <div className="mt-3 font-bold flex justify-center">
          Waiting for payment
        </div>
      </div>
      <div className="py-5">
        <div className="px-15 rounded-lg">
          <div className="px-15 rounded-lg">
            <h2 className="font-bold flex">Payment Step</h2>
            <ol className="list-style-decimal">
              {" "}
              {/* Gimana caranya bikin lingkaran dg angka di dalam??? */}
              <li className="block">
                Lorem ipsum dolor sit amet consectetur. Nulla non commodo vitae
                sagittis diam pretium.{" "}
              </li>{" "}
              <li className="flex justify-start">
                Eget quis neque turpis quis hendrerit. Proin cras iaculis et
                urna lacus eget.{" "}
              </li>{" "}
              <li className="flex justify-start">
                Varius turpis scelerisque viverra aliquet lectus eros.
              </li>
            </ol>
          </div>
        </div>
        <div className="pt-10 mx-15 rounded-lg shadow-xl bg-slate-50">
          <div className="">
            <h2 className="flex">Ordered</h2>
          </div>
          <div>
            <ul>
              {cartItems?.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span className="flex">{item.name}</span>
                  <div className="flex justify-end mr-6">
                    <span className="flex mr-4">x{item.amount}</span>
                    <span className="flex">Rp 45.000,00</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mr-6">
            Total Payment <span>Rp 135.000,00</span>
          </div>
          <div></div>
        </div>
      </div>
      <button
        className="absolute justify-center w-11/12 p-4 px-4 text-sm font-semibold text-center text-white bg-black rounded-full bottom-3"
        onClick={() => navigateToPayment("/completed")}
      >
        Done
      </button>
    </section>
  );
}
