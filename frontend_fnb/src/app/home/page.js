import React from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterMenu from "@/components/FilterMenu";
import Menu from "@/components/Menu";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FilterMenu />
      <Menu />
    </>
  );
};

export default Home;
