/* eslint-disable react/jsx-no-undef */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from "./WidthStyles";
import { useState } from "react";

import pinkTshirtBack from "../assets/AlabayMerch/pinkback.png";

import capBack from "../assets/AlabayMerch/backback.png";

import yellowTshirtBack from "../assets/AlabayMerch/yellowtback.png";

import hoodieBack from "../assets/AlabayMerch/hoodieback.png";
import Card1Image from "../assets/card1.png";
import Card2Image from "../assets/card2.png";
import Card3Image from "../assets/card3.png";
import Card4Image from "../assets/card4.png";

const Contents = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allItems = [
    {
      type: "photo",

      headline: "w3js.com - web front-end studio",
      image: Card1Image,
    },
    {
      type: "photo",

      headline: "w3js.com - web front-end studio",
      image: Card1Image,
    },
    {
      type: "photo",

      headline: "w3js.com - web front-end studio",
      image: Card3Image,
    },
    {
      type: "photo",

      headline: "w3js.com - web front-end studio",
      image: Card2Image,
    },
    {
      type: "photo",

      headline: "w3js.com - web front-end studio",
      image: Card4Image,
    },
    {
      type: "video",

      headline: "w3js.com - web front-end studio",
      image: pinkTshirtBack,
    },
    {
      type: "video",

      headline: "w3js.com - web front-end studio",
      image: capBack,
    },
    {
      type: "video",

      headline: "w3js.com - web front-end studio",
      image: hoodieBack,
    },
    {
      type: "video",

      headline: "w3js.com - web front-end studio",
      image: pinkTshirtBack,
    },
    {
      type: "video",

      headline: "w3js.com - web front-end studio",
      image: yellowTshirtBack,
    },
    // Add more photo and video items...
  ];
  const filteredItems = allItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });
  return (
    <div>
      <div className="flex justify-center mb-5 font-bold">
        <button
          onClick={() => setActiveTab("all")}
          className={`mr-2 ${
            activeTab === "all" ? "text-yellow-500" : ""
          } px-4 py-2`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("photo")}
          className={`mr-2 ${
            activeTab === "photo" ? "text-yellow-500" : ""
          } px-4 py-2`}
        >
          Photos
        </button>
        <button
          onClick={() => setActiveTab("video")}
          className={`${
            activeTab === "video" ? "text-yellow-500" : ""
          } px-4 py-2`}
        >
          Videos
        </button>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {filteredItems.map((item, index) => (
          <WithStyles
            key={index}
            description={item.description}
            headline={item.headline}
            image={item.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Contents;
