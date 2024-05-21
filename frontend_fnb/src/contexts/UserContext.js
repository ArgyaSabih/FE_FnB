"use client";
import React, {createContext, useContext, useState} from "react";

const UserContext = createContext();

export const menuItems = [
  {
    id: 1,
    name: "Japanese Chicken Gyoza",
    amount: 2,
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "30.555",
    image: "img/menu1.png",
    description:
      "satu ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id."
  },
  {
    id: 2,
    name: "Japanese Chicken Gyoza",
    amount: 2,
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "dua ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id."
  },
  {
    id: 3,
    name: "Japanese Chicken Gyoza",
    amount: 1,
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "tiga ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id."
  },
  {
    id: 4,
    name: "Japanese Chicken Gyoza",
    amount: 2,
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id."
  },
  {
    id: 5,
    name: "Japanese Chicken Gyoza",
    amount: 1,
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id."
  }
];

export const UserProvider = ({children}) => {
  const [totalItem, setTotalItem] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [opacity, setOpacity] = useState("100%");
  const [text, setText] = useState("Add to cart");
  const [disabled, setDisabled] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickItem = (item) => {
    setSelectedItem(item);
  };

  const handleTotalOrderChange = (value) => {
    setTotalItem(value);
  };

  const handleCloseDetailMenu = () => {
    setSelectedItem(null);
    setTotalItem(0);
    setDisabled(false);
    setOpacity("100%");
    setText("Add To Cart");
  };

  const handleClickAddToCart = () => {
    if (totalItem > 0) {
      if (selectedItem && selectedItem.price) {
        const item = menuItems.find((menuItem) => menuItem.id === selectedItem.id);
        if (item) {
          setTotalPrice(parseFloat(totalPrice) + parseFloat(selectedItem.price) * totalItem);
        }
      }
      setTotalOrder(totalOrder + totalItem);
      setOpacity("50%");
      setText("Added to cart");
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

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

  return (
    <UserContext.Provider
      value={{
        totalItem,
        totalOrder,
        totalPrice,
        selectedItem,
        handleClickItem,
        handleTotalOrderChange,
        handleCloseDetailMenu,
        handleClickAddToCart,
        opacity,
        text,
        disabled,
        formatPrice
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
