import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import FilterMenu from "../components/FilterMenu";
import Menu from "../components/Menu";

export default function Home({totalOrder, onClickItem, selectedItem, totalPrice}) {
  return (
    <>
      <Header />
      <Hero />
      <FilterMenu />
      <Menu
        totalOrder={totalOrder}
        onClickItem={onClickItem}
        selectedItem={selectedItem}
        totalPrice={totalPrice}
      />
    </>
  );
}
