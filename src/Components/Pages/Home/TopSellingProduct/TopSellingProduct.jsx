import React from "react";
import { BsFire } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { topSellerData } from "../../../Utility/TopSellerProductData";
import { FcRating } from "react-icons/fc";

const TopSellingProduct = () => {
  return (
    <div>
      <div className="flex justify-between mx-4 mt-40 text-2xl text-white font-bold">
        <h3 className="flex items-center">
          <BsFire></BsFire>
          <span className="ml-2">Top Best Sellers</span>
        </h3>
        <button className="flex items-center">
          <span className="mr-2 -mt-2">view more</span>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 m-4">
        {topSellerData.map((item) => {
          return (
            <div>
              <img
                className="w-full h-64 rounded-t-2xl"
                key={item._id}
                src={item.images[0]}
                alt=""
              />
              <div class="px-5 py-5 space-y-4">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name ? item.name.slice(0,20):null}
                  </h5>
                </a>
                <div className="flex items-center space-x-2">
                  <h3 className="bg-orange-500 text-white w-5 rounded-lg text-center">{item.rating}</h3>
                  <div className="flex items-center space-x-1"><FcRating size={25}/><FcRating size={25}/><FcRating size={25}/><FcRating size={25}/><FcRating size={25}/></div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSellingProduct;
