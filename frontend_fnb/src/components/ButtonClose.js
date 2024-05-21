import React from "react";
import Link from "next/link";
import {useUser} from "@/contexts/UserContext";

const ButtonClose = () => {
  const {handleCloseDetailMenu} = useUser();

  return (
    <>
      <Link href={"/"}>
        <button
          onClick={() => {
            handleCloseDetailMenu();
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19M5 12L9 16M5 12L9 8"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>
    </>
  );
};

export default ButtonClose;
