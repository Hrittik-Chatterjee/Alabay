/* eslint-disable react/jsx-no-undef */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Importing product images
import pinkTshirt from "../assets/AlabayMerch/pinktshirt.png";
import pinkTshirtBack from "../assets/AlabayMerch/pinkback.png";
import cap from "../assets/AlabayMerch/capmockup.png";
import capBack from "../assets/AlabayMerch/backback.png";
import yellowTshirt from "../assets/AlabayMerch/yellowtshirt.png";
import yellowTshirtBack from "../assets/AlabayMerch/yellowtback.png";
import hoodie from "../assets/AlabayMerch/hoodie.png";
import hoodieBack from "../assets/AlabayMerch/hoodieback.png";
import MerchCard from "./MerchCard";

const Merch = () => {
  const merchItems = [
    {
      id: 1,
      backgroundImage: pinkTshirtBack,
      productImage: pinkTshirt,
      title: "Pink T-shirt",
      description: "Fresh new Alabay approved merch for you!",
    },
    {
      id: 2,
      backgroundImage: capBack,
      productImage: cap,
      title: "Alabay Cap",
      description: "Check out the latest cap drop!",
    },
    {
      id: 3,
      backgroundImage: yellowTshirtBack,
      productImage: yellowTshirt,
      title: "Yellow T-shirt",
      description: "Limited Edition Yellow T-shirt now available!",
    },
    {
      id: 4,
      backgroundImage: hoodieBack,
      productImage: hoodie,
      title: "Alabay Hoodie",
      description: "Exclusive hoodie from the Summer Collection!",
    },
  ];

  return (
    <div>
      <h1 className="text-center font-cheeseburga text-7xl text-orange-500 mt-4">
        {" "}
        Merchendise
      </h1>
      <Carousel
        additionalTransfrom={0}
        arrows
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
            items: 1,
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
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {merchItems.map((item) => (
          <MerchCard
            key={item.id}
            backgroundImage={item.backgroundImage}
            productImage={item.productImage}
            title={item.title}
            description={item.description}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Merch;
