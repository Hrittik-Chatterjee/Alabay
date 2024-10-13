import visionImage from "../assets/vision.png";

const Vision = () => {
  return (
    <div className="flex justify-center items-center bg-yellow-500 px-4 py-12">
      {/* Container for the image and reflection */}
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-cheeseburga text-center my-8 text-white">
          Project Vision
        </h1>

        <div className="relative">
          {/* Original Image */}
          <img
            src={visionImage}
            alt="Group of Dogs"
            className="block w-full max-w-[900px] h-auto mx-auto"
          />

          {/* Reflected Image with Full Blend Effect */}
          <div className="overflow-hidden h-20 relative mx-auto max-w-[900px]">
            {/* Reflected Image */}
            <img
              src={visionImage}
              alt="Reflection"
              className="block w-full transform rotate-180 scale-x-[-1] opacity-50"
              style={{
                transform: "scaleY(-1)",
                marginTop: "-4px",
              }}
            />

            {/* Gradient Overlay for Smooth Background Blend */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-500 to-yellow-500 via-transparent"
              style={{ opacity: 0.9 }}
            />
          </div>

          {/* Mission Text */}
          <p className="text-center text-lg sm:text-xl lg:text-2xl font-bold max-w-4xl mx-auto mt-4">
            Our mission is to honor the heritage of Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
