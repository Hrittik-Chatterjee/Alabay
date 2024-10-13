/* eslint-disable react/prop-types */
const MerchCard = ({ backgroundImage, productImage, title }) => {
  return (
    <div
      className="relative flex items-center justify-center p-4 md:p-6 rounded-lg shadow-lg mx-auto my-8 md:my-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px", // Default height for smaller screens
      }}
    >
      {/* Product Image */}
      <img
        src={productImage}
        alt={title}
        className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] object-contain"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Button Section */}
      <div className="absolute bottom-4 md:bottom-6 text-center w-full">
        <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full text-sm md:text-base hover:bg-yellow-600 transition duration-300">
          Discover
        </button>
      </div>
    </div>
  );
};

export default MerchCard;
