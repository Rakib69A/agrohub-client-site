import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { topSellerData } from "../../../Utility/TopSellerProductData";
import { FcRating } from "react-icons/fc";
import SwiperCore, { Navigation, Autoplay } from "swiper/core"; 
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay]);

const ShopByCategory = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  return (
    <div>
      <div className="flex justify-between mx-4 mt-40 text-2xl text-white font-bold">
        <h3 className="flex items-center">
          <BiCategoryAlt className="text-orange-500"></BiCategoryAlt>
          <span className="ml-2">Shop By Category</span>
        </h3>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesToShow}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 2500 }}
      >
        <div>
          {topSellerData.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div>
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
                          {item.name ? item.name.slice(0, 20) : null}
                        </h5>
                      </a>
                      <div className="flex items-center space-x-2">
                        <h3 className="bg-orange-500 text-white w-5 rounded-lg text-center">
                          {item.rating}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <FcRating size={25} />
                          <FcRating size={25} />
                          <FcRating size={25} />
                          <FcRating size={25} />
                          <FcRating size={25} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
        <div className="swiper-button-next "></div>
          <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default ShopByCategory;
