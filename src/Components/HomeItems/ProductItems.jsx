import React from "react";
import { BsBagPlus, BsHeart } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const ProductItems = (prop) => {
  const rate = Number(prop.items.rating);
  const renderRating = () => {
    const ratingElements = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        ratingElements.push(<IoMdStar key={i} className="text-blue-600" />);
      } else {
        ratingElements.push(<IoMdStar key={i} className="text-gray-200 " />);
      }
    }
    return ratingElements;
  };

  return (
    <>
      {
        prop.items?
        <div className="w-full min-h-[320px] max-h-[320px] relative group max-w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <ScrollToTop/>
      <Link to={`/${prop.type}/${prop.items.id}`}>
        <img
          className="p-8 rounded-t-lg w-full h-[200px] object-contain "
          src={prop.items.image}
          alt="productimage"
        />
      </Link>
      <div className="px-5 flex flex-col pb-5">
        <Link to={`/${prop.type}/${prop.items.id}`}>
          <h5 className="text-[16px] font-normal tracking-tight text-gray-900 dark:text-white">
            {prop.items.productname}
          </h5>
        </Link>
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
      </div>
      <div className=" absolute right-[10px] top-[10px] translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition duration-200 ease ">
        <div>
          <button className=" active:bg-red-300 active:text-white p-2 rounded cursor-pointer mb-3 text-black border border-slate-300 hover:text-red-500 ">
            <BsHeart />
          </button>
        </div>
        <div>
          <button className="active:bg-blue-300 active:text-white p-2 rounded cursor-pointer text-black border border-slate-300 hover:text-blue-600 ">
            <BsBagPlus />
          </button>
        </div>
      </div>
    </div>
        :<div>Loading</div>
      }
    </>
  );
};

export default ProductItems;
