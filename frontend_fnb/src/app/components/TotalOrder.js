import React from "react";
import {useNavigate} from "react-router-dom";

export default function TotalOrder({totalOrder, totalPrice}) {
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

  const navigateToCheckout = useNavigate();

  return (
    <>
      <button
        className="sticky left-0 w-full p-4 pl-6 mt-4 text-sm text-white bg-black rounded-full bottom-2 text-start"
        onClick={() => {
          navigateToCheckout("/checkout");
        }}
      >
        Ordered <span className="font-bold">{totalOrder}</span> for{" "}
        <span className="font-bold">Rp {formatPrice(totalPrice)}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-6 top-4"
        >
          <path
            d="M1.875 14.375H18.125C18.2908 14.375 18.4497 14.3092 18.5669 14.1919C18.6842 14.0747 18.75 13.9158 18.75 13.75C18.75 13.5842 18.6842 13.4253 18.5669 13.3081C18.4497 13.1908 18.2908 13.125 18.125 13.125H17.5V11.875C17.4977 9.99478 16.7902 8.18382 15.5172 6.80005C14.2443 5.41628 12.4985 4.5604 10.625 4.40156V3.125H11.875C12.0408 3.125 12.1997 3.05915 12.3169 2.94194C12.4342 2.82473 12.5 2.66576 12.5 2.5C12.5 2.33424 12.4342 2.17527 12.3169 2.05806C12.1997 1.94085 12.0408 1.875 11.875 1.875H8.125C7.95924 1.875 7.80027 1.94085 7.68306 2.05806C7.56585 2.17527 7.5 2.33424 7.5 2.5C7.5 2.66576 7.56585 2.82473 7.68306 2.94194C7.80027 3.05915 7.95924 3.125 8.125 3.125H9.375V4.40156C7.5015 4.5604 5.75574 5.41628 4.48278 6.80005C3.20982 8.18382 2.50228 9.99478 2.5 11.875V13.125H1.875C1.70924 13.125 1.55027 13.1908 1.43306 13.3081C1.31585 13.4253 1.25 13.5842 1.25 13.75C1.25 13.9158 1.31585 14.0747 1.43306 14.1919C1.55027 14.3092 1.70924 14.375 1.875 14.375ZM3.75 11.875C3.75 10.2174 4.40848 8.62769 5.58058 7.45558C6.75269 6.28348 8.3424 5.625 10 5.625C11.6576 5.625 13.2473 6.28348 14.4194 7.45558C15.5915 8.62769 16.25 10.2174 16.25 11.875V13.125H3.75V11.875ZM18.75 16.25C18.75 16.4158 18.6842 16.5747 18.5669 16.6919C18.4497 16.8092 18.2908 16.875 18.125 16.875H1.875C1.70924 16.875 1.55027 16.8092 1.43306 16.6919C1.31585 16.5747 1.25 16.4158 1.25 16.25C1.25 16.0842 1.31585 15.9253 1.43306 15.8081C1.55027 15.6908 1.70924 15.625 1.875 15.625H18.125C18.2908 15.625 18.4497 15.6908 18.5669 15.8081C18.6842 15.9253 18.75 16.0842 18.75 16.25Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
}
