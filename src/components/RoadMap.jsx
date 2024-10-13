import RoadMapImage from "../assets/roadmap.png";

const RoadmapComponent = () => {
  return (
    <div className="relative overflow-hidden bg-yellow-500 flex items-center py-12 px-4">
      {/* Tilted Background Shape */}
      <div
        className="absolute top-0 left-0 w-full h-[80%] z-0"
        style={{
          background: "white",
          transform: "skewY(-3deg)",
          transformOrigin: "top right",
          top: "-20px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ROAD MAP
          </h1>
          <p className="text-black text-lg md:text-2xl mb-2 font-bold">
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store.
          </p>
          <p className="text-yellow-500 text-lg md:text-2xl font-bold">
            Join us as we grow and achieve new heights.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-[600px] relative">
          <div className="relative overflow-hidden">
            {/* Mirrored Image */}
            <img
              src={RoadMapImage}
              alt="Mascot"
              className="w-full object-cover transform scale-x-[-1]"
            />
            {/* Fade Effect */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to left, white, transparent)",
                right: "-50px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapComponent;
