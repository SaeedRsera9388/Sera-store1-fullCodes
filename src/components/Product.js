import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { sliderSettings } from "./common";
import { motion } from "framer-motion";
import "./Style.css";
import sliderData from "./slider";

SwiperCore.use([]);

const Product = () => {
  return (
    <motion.div
    initial={{y: "10rem", opacity: 0}}
    animate={{y:0, opacity:1}}
    transition={{
      duration: 5,
      type: "spring"
    }}
    className="p-wrapper" id="product">
      <div className="paddings innerWidth-container p-container">
        <div>
          <h1 className="py-5 text-3xl justify-center flex sm:text-1xl lg:text-2xl xl:text-3xl">
            Services we offer
          </h1>
          <h2 className="text-black/70 py-5 justify-center text-center sm:text-1xl lg:text-2xl xl:text-3xl">
            Faithful to our services and Loyalty indicating the revenue and
            profit from repeat businesses
          </h2>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {sliderData.map((card, i) => (
            <SwiperSlide>
              <div className="flexColStart r-card text-center py-10 px-1">
                <div className="product-img">
                  <img
                    src={card.image}
                    alt="product"
                    className="w-[20rem] h-[15rem]"
                  />
                </div>

                <div className="brand-img mr-6 py-3 w-full flex justify-center">
                  <img
                  src={card.brand}
                  alt="brand"
                  className="text-grey h-[9rem] w-[9rem] text-center"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Product;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
