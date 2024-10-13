import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import game1 from "../assets/Alabay Games/game1.png"; // Example image
import game2 from "../assets/Alabay Games/game2.png";
import GamesCard from "./GamesCard";

const Games = () => {
  const carouselRef = useRef(null); // Reference for carousel control

  const allItems = [
    {
      image: game1,
      headline: "Game 1",
      description: "Exciting adventure awaits!",
    },
    {
      image: game2,
      headline: "Game 2",
      description: "Join the quest now!",
    },
    // Add more game items if needed
  ];

  return (
    <div className="my-6">
      {/* Title Section */}
      <h2 className="text-center font-cheeseburga text-5xl md:text-7xl lg:text-8xl text-orange-500 my-4">
        Games
      </h2>
      <p className="font-bold text-center text-xl md:text-2xl my-6 md:my-10">
        Stay tuned for upcoming games!
      </p>

      <div className="relative">
        {/* Carousel Section */}
        <Carousel
          ref={carouselRef}
          additionalTransfrom={0}
          arrows={false} // Disable default arrows
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          infinite
          keyBoardControl
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          slidesToSlide={1} // Slide one item at a time
          swipeable
        >
          {allItems.map((item, index) => (
            <GamesCard
              key={index}
              description={item.description}
              headline={item.headline}
              image={item.image}
            />
          ))}
        </Carousel>

        {/* Custom Right Arrow */}
        <button
          onClick={() => carouselRef.current.next()}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black text-white text-lg md:text-2xl font-bold rounded-full p-2 md:p-3 shadow-md"
        >
          &rarr; {/* Right arrow symbol */}
        </button>

        {/* Button Container */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 md:py-4 px-4 md:px-6 mb-5 md:mb-7 rounded-full transition duration-300">
            Discover <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
