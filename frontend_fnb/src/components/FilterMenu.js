"use client";
import React, {useState} from "react";

export default function FilterMenu() {
  const buttons = ["Popular", "Discount", "Food", "Beverage"];
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className="flex justify-around gap-2 mt-6 mb-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`px-3 py-1.5 rounded-full text-md shadow border-[1.5px] ${
            selectedButton === index ? "border-black" : ""
          }`}
          onClick={() => setSelectedButton(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
