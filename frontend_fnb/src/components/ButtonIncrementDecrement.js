import React from "react";
import {useUser} from "@/contexts/UserContext";
import {menuItems} from "@/contexts/UserContext";

const ButtonIncrementDecrement = ({totalItem, setTotalItem}) => {
  const {selectedItem, disabled} = useUser();
  const item = menuItems.find((menuItem) => menuItem.id === selectedItem?.id);
  const update = (change) => {
    if (change > 0) {
      if (totalItem > 20 - change) return;
    } else if (change < 0) {
      if (totalItem < 0 - change) return;
    }

    if (!item) return;
    setTotalItem(totalItem + change);
  };

  return (
    <div className="flex justify-end gap-3 my-4">
      <button onClick={() => update(-1)} disabled={disabled}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="13.5" fill="#EEEEEE" stroke="#EEEEEE" />
          <path
            d="M19.4688 14C19.4688 14.174 19.3996 14.341 19.2765 14.464C19.1535 14.5871 18.9865 14.6562 18.8125 14.6562H9.1875C9.01345 14.6562 8.84653 14.5871 8.72346 14.464C8.60039 14.341 8.53125 14.174 8.53125 14C8.53125 13.826 8.60039 13.659 8.72346 13.536C8.84653 13.4129 9.01345 13.3438 9.1875 13.3438H18.8125C18.9865 13.3438 19.1535 13.4129 19.2765 13.536C19.3996 13.659 19.4688 13.826 19.4688 14Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="text-[#FF5800] content-center">{totalItem}</div>
      <button onClick={() => update(1)} disabled={disabled}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="13.5" fill="#EEEEEE" stroke="#EEEEEE" />
          <path
            d="M19.4688 14C19.4688 14.174 19.3996 14.341 19.2765 14.464C19.1535 14.5871 18.9865 14.6562 18.8125 14.6562H14.6562V18.8125C14.6562 18.9865 14.5871 19.1535 14.464 19.2765C14.341 19.3996 14.174 19.4688 14 19.4688C13.826 19.4688 13.659 19.3996 13.536 19.2765C13.4129 19.1535 13.3438 18.9865 13.3438 18.8125V14.6562H9.1875C9.01345 14.6562 8.84653 14.5871 8.72346 14.464C8.60039 14.341 8.53125 14.174 8.53125 14C8.53125 13.826 8.60039 13.659 8.72346 13.536C8.84653 13.4129 9.01345 13.3438 9.1875 13.3438H13.3438V9.1875C13.3438 9.01345 13.4129 8.84653 13.536 8.72346C13.659 8.60039 13.826 8.53125 14 8.53125C14.174 8.53125 14.341 8.60039 14.464 8.72346C14.5871 8.84653 14.6562 9.01345 14.6562 9.1875V13.3438H18.8125C18.9865 13.3438 19.1535 13.4129 19.2765 13.536C19.3996 13.659 19.4688 13.826 19.4688 14Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonIncrementDecrement;
