import React from "react";
import Categories from "./Categories";
import NewProducts from "../Stocks/NewProducts";
import BestSeller from "../Stocks/BestSeller";

export const Midbar = () => {
  return (
    <div className="w-[95%] m-auto mt-10">
      <div className="flex gap-x-5">
        <div>
        <Categories />
        <BestSeller />
        </div>
        <NewProducts />
        <NewProducts />
        <NewProducts />
      </div>
    </div>
  );
};
