import React from "react";
import { Link } from "react-router-dom";

const NewProducts = () => {
  return (
    <div className="mt-10 w-72 ">
      <div className=" flex justify-between py-3 px-1 border-b border-slate-300 items-center">
        <h1 className=" text-base font-semibold -tracking-tighter">New Arrivals</h1>
        <Link to="/newProducts">+</Link>
      </div>
      <div className="my-4 p-3 flex rounded-lg border border-slate-300 ">
        <div className="flex-1"><img src="" alt="" /></div>
        <div className="flex-1"><h1 className=" capitalize text-base font-medium">title</h1>
        <p className=" text-sm font-medium text-slate-600">brand</p>
        <p>Rs 5</p></div>
      </div>     
    </div>
  );
};

export default NewProducts;
