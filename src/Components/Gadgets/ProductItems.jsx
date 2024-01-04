import React from "react";
import { BsBagPlus, BsHeart } from "react-icons/bs";
import {IoMdStar} from "react-icons/io"

const ProductItems = (prop) => {
    const rate = Number(prop.items.rating);
    const renderRating = () => {
        const ratingElements = [];
        for (let i = 1; i <= 5; i++) {
            if (i<=rate){
                ratingElements.push(<IoMdStar className="text-blue-600" />);
            }
            else{
                ratingElements.push(<IoMdStar className="text-gray-200 " />);
            }
        }
        return ratingElements;
      };

  return (
    <div className="w-full relative group max-w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <a href="h.html">
        <img
          className="p-8 rounded-t-lg w-full h-[200px] object-contain "
          src={prop.items.image}
          alt="productimage"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="h.html">
          <h5 className="text-[16px] font-normal tracking-tight text-gray-900 dark:text-white">
            {prop.items.title}
          </h5>
        </a>
        <div className="flex items-center space-y-1 space-x-1 rtl:space-x-reverse">
        {renderRating()}   
        </div>
        <div className="flex items-center justify-between mt-2.5 mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {prop.items?.rating}
          </span>
          <span className="text-base font-semibold text-gray-900 dark:text-white">
            Rs. {prop.items.price}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <a
            href="h.html"
            className="text-white hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
      <div className=" absolute right-[10px] top-[10px] translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition duration-200 ease ">
        <div>
          {" "}
          <button className=" active:bg-red-300 active:text-white p-2 rounded cursor-pointer mb-3 text-black border border-slate-300 hover:text-red-500 ">
            {" "}
            <BsHeart />{" "}
          </button>
        </div>
        <div>
          <button className="active:bg-blue-300 active:text-white p-2 rounded cursor-pointer text-black border border-slate-300 hover:text-blue-600 ">
            {" "}
            <BsBagPlus />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
