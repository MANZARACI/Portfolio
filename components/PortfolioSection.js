import React from "react";
import PortfolioList from "./PortfolioList";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="font-Kanit w-4/5 md:w-3/5 mx-auto mb-12 pt-20">
      <h2 className="text-3xl text-gray-400">My Portfolio</h2>
      <PortfolioList />
    </section>
  );
};

export default PortfolioSection;
