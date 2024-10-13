import Card from "./Card";
import Card1Image from "../assets/card1.png";
import Card2Image from "../assets/card2.png";
import Card3Image from "../assets/card3.png";
import Card4Image from "../assets/card4.png";

const CardContainer = () => {
  const cardData = [
    {
      title: "Community Building and Initial Launch",
      imageSrc: Card1Image,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Merchandise Store Launch",
      imageSrc: Card2Image,
      bgColor: "bg-teal-400",
    },
    {
      title: "Community Events and Contests",
      imageSrc: Card3Image,
      bgColor: "bg-fuchsia-500",
    },
    {
      title: "Expansion and New Features",
      imageSrc: Card4Image,
      bgColor: "bg-pink-950",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
