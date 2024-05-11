import React from "react";
import ButtonIncrementDecrement from "./ButtonIncrementDecrement";

export default function ButtonDetailMenu({
  totalItem,
  onTotalOrderChange,
  onClickAddToCart,
  opacity,
  text,
  disabled
}) {
  return (
    <div>
      <ButtonIncrementDecrement
        totalItem={totalItem}
        disabled={disabled}
        onTotalOrderChange={onTotalOrderChange}
      />
      <div>
        <button
          style={{
            opacity: opacity
          }}
          onClick={onClickAddToCart}
          disabled={disabled}
          className="w-full p-4 text-white bg-black rounded-xl"
        >
          {text}
        </button>
      </div>
    </div>
  );
}
