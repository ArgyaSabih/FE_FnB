import React from "react";
import {useUser} from "@/contexts/UserContext";
import ButtonIncrementDecrement from "./ButtonIncrementDecrement";

const ButtonDetailMenu = () => {
  const {handleClickAddToCart, opacity, disabled, text} = useUser();

  return (
    <div>
      <ButtonIncrementDecrement />
      <div>
        <button
          style={{
            opacity: opacity
          }}
          onClick={handleClickAddToCart}
          disabled={disabled}
          className="w-full p-4 text-white bg-black rounded-xl"
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default ButtonDetailMenu;
