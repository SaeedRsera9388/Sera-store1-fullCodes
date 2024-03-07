import React, { useState } from "react";
import "./Style.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { motion } from "framer-motion";

const newsData = [
  {
    date: "01 Nov",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "05 Dec",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "16 Jan",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "18 March",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "01 Oct",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "01 Oct",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "01 Oct",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "31 Dec",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "07 March",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "19 Jun",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "29 Feb",
    news: "Lorem ipsum dolor sit amet",
  },
  {
    date: "19 May",
    news: "Lorem ipsum dolor sit amet",
  },
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="news-wrapper paddings" id="news">
      <motion.div
        initial={{ y: "-10rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
        }}
      >
        <div>
          <h2 className="justify-center text-center text-white text-5xl">
            News
          </h2>
        </div>
        <div className="news-box gap-10 paddings mt-10 m-1 flex justify-center flex-col sm:flex-row xl:flex">
          <button
            className="news-btn h-10 w-10 justify-center text-center flex py-2"
            onClick={goToPreviousSlide}
          >
            <GrFormPrevious />
          </button>

          <div className="slide">
            <div className="text-white flex gap-2">
              <div className="horizontal-line"></div>
              {
                newsData[
                  currentIndex === 0 ? newsData.length - 1 : currentIndex - 1
                ].date
              }
            </div>
            <div className="text-start flex text-neutral-500 text-2xl">
              <div className="horizontal-line"></div>
              {
                newsData[
                  currentIndex === 0 ? newsData.length - 1 : currentIndex - 1
                ].news
              }
            </div>
            <div className="news-Read">
              <span className="news-color text-white text-2xl ">
                Read The News
              </span>
            </div>
          </div>
          <div className="slide">
            <div className="text-white flex gap-3">
              <div className="horizontal-line"></div>
              {newsData[currentIndex].date}
            </div>
            <div className="text-start flex text-neutral-500 text-2xl">
              <div className="horizontal-line"></div>
              {newsData[currentIndex].news}
            </div>
            <div className="news-Read">
              <span className="news-color text-2xl text-white">
                Read The News
              </span>
            </div>
          </div>

          <button
            className="news-btn h-10 w-10 justify-center text-center flex py-2"
            onClick={goToNextSlide}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default News;
