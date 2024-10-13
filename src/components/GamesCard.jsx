/* eslint-disable react/prop-types */
const GamesCard = ({ image }) => {
  return (
    <div
      className="relative flex flex-col justify-end p-4 rounded-lg shadow-lg mx-auto"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh", // Set height to a relative value for better responsiveness
        maxWidth: "1000px", // Max width for larger screens
        width: "100%", // Full width for smaller screens
      }}
    ></div>
  );
};

export default GamesCard;
