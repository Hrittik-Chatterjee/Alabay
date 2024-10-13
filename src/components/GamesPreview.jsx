import abilities2 from "../assets/Alabay Games/abilities2.png";
import artifacts1 from "../assets/Alabay Games/artifacts1.png";
import guard3 from "../assets/Alabay Games/guard3.png";

const GamesPreviews = () => {
  const previews = [
    { image: abilities2, alt: "Artifact Collected" },
    { image: artifacts1, alt: "Pungent Poop" },
    { image: guard3, alt: "Wrath Hound" },
  ];

  return (
    <div className="relative overflow-x-auto py-8 lg:mx-24">
      <h1 className="text-2xl font-bold ml-5 my-3 text-yellow-500">
        Game <span className="text-gray-800">Previews</span>
      </h1>
      <div
        className="flex flex-wrap justify-start gap-4 px-4" // Use flex-wrap for responsive layout
        style={{ paddingRight: "5rem" }} // Adds space for arrow button
      >
        {previews.map((preview, index) => (
          <div
            key={index}
            className="min-w-[270px] w-full sm:w-[270px] bg-gray-800 rounded-xl shadow-lg"
          >
            <img
              src={preview.image}
              alt={preview.alt}
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow Button - Hidden on small screens */}
      <button className="absolute hidden sm:block right-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-4xl rounded-lg p-2 shadow-md hover:bg-gray-600">
        &rarr;
      </button>
    </div>
  );
};

export default GamesPreviews;
