"use client";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DetailMenu from "./pages/DetailMenu";
import Checkout from "./pages/Checkout";
import PaymentPage from "./pages/PaymentPage";

const menuItems = [
  {
    id: 1,
    name: "Japanese Chicken Gyoza",
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "30.555",
    image: "img/menu1.png",
    description:
      "satu ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id.",
  },
  {
    id: 2,
    name: "Japanese Chicken Gyoza",
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "dua ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id.",
  },
  {
    id: 3,
    name: "Japanese Chicken Gyoza",
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "tiga ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id.",
  },
  {
    id: 4,
    name: "Japanese Chicken Gyoza",
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id.",
  },
  {
    id: 5,
    name: "Japanese Chicken Gyoza",
    ingredients: "Chicken, mie, gyoza, ice tea",
    price: "45.000",
    image: "img/menu1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit proin sit pulvinar id lectus lectus natoque dolor arcu. Ornare arcu amet sed in eu tellus id.",
  },
];

const cartItems = [
  {
    id: 1,
    name: "Japanese Chicken Gyoza",
    amount: 2,
    price: 45000,
  },
  {
    id: 2,
    name: "Japanese Chicken Gyoza",
    amount: 1,
    price: 30000,
  },
  {
    id: 3,
    name: "Japanese Chicken Gyoza",
    amount: 1,
    price: 30000,
  },
  {
    id: 4,
    name: "Japanese Chicken Gyoza",
    amount: 2,
    price: 45000,
  },
];

export { menuItems };
export { cartItems };

export default function User() {
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
    if (selectedItem && selectedItem.price) {
      const item = menuItems.find(
        (menuItem) => menuItem.id === selectedItem.id
      );
      if (item) {
        setTotalPrice(
          parseFloat(totalPrice) + parseFloat(selectedItem.price) * totalItem
        );
      }
    }
    setTotalOrder(totalOrder + totalItem);
    setOpacity("50%");
    setText("Added to cart");
    setDisabled(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              totalOrder={totalOrder}
              onClickItem={handleClickItem}
              selectedItem={selectedItem}
              totalPrice={totalPrice}
            />
          }
        />
        <Route
          path="/detail-menu"
          element={
            <DetailMenu
              selectedItem={selectedItem}
              onClose={handleCloseDetailMenu}
              onClickAddToCart={handleClickAddToCart}
              onTotalOrderChange={handleTotalOrderChange}
              totalItem={totalItem}
              opacity={opacity}
              text={text}
              disabled={disabled}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              totalPrice={totalPrice}
              totalOrder={totalOrder}
              selectedItem={selectedItem}
            />
          }
        />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}
